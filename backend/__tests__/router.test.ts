import * as request from "supertest"
import app from "../src/app"
import mongoose from "mongoose"
mongoose.set("strictQuery", false)
import * as dotenv from "dotenv"
import * as path from "path"
import * as bcrypt from "bcryptjs"

dotenv.config({ path: path.resolve(__dirname, "..", ".env") })
const db = process.env.DATABASE || ""

class AuthTestingTools {
  static refreshToken = ""
  set refreshToken(newValue) {
    this.refreshToken = newValue
  }
  get refreshToken(): string {
    return this.refreshToken
  }
  static userFullData = {
    email: "testEmail",
    username: "testUsername",
    password: "testPassword",
  }
  static username = {
    username: "testUsername",
  }
  static testPasswordVerify(password: string) {
    expect(bcrypt.compareSync("testPassword", password)).toBeTruthy()
  }
  static successMatcher(res: string) {
    expect(res).toMatch("success")
  }
  static userDataVerify(data: string[]) {
    expect(data).toEqual(["testEmail", "testUsername"])
  }
  static elemChecker(data: string[]) {
    for (let elem of data) {
      expect(elem).toBeTruthy()
    }
  }
}

describe("CRD cycle", () => {
  beforeAll(() => mongoose.connect(db))
  afterAll((done) => mongoose.disconnect(done))

  describe("create", () => {
    test("(simple) create", async () => {
      const response = await request(app)
        .post("/users/reg")
        .send(AuthTestingTools.userFullData) // sending new user
      const { email, username, password } = response.body.data.user // getting user's data from response
      const { accessToken, refreshToken } = response.body.data.tokens // getting tokens from tokenService
      AuthTestingTools.refreshToken = refreshToken // setting refreshToken for future operations
      AuthTestingTools.testPasswordVerify(password) // check if passwords are equals
      AuthTestingTools.successMatcher(response.body.message) // check whether message match word 'success'
      AuthTestingTools.userDataVerify([email, username]) // check if email & username are correct
      AuthTestingTools.elemChecker([accessToken, refreshToken]) // check whether access and refresh tokens exist
    })
    test("(error) create", async () => {
      const response = await request(app)
        .post("/users/reg")
        .send(AuthTestingTools.userFullData) // sending user that already exists
      const { statusCode, message } = response.body // getting statusCode and message from response
      expect(message).toBe("User already exists") // check if msg say that user already exists
      expect(statusCode).toBe(409) // expect status 409 - Conflict
    })
  })
  describe("read", () => {
    test("(simple) read", async () => {
      const response = await request(app)
        .post("/users/getOneUser")
        .send(AuthTestingTools.username) // sending username of test_user
      const { email, username, password, _id } = response.body.message // getting user's data from response
      AuthTestingTools.testPasswordVerify(password) // check if passwords are equals
      AuthTestingTools.userDataVerify([email, username]) // check if email & username are correct
      const findTokenByUserId = await request(app)
        .post("/users/token/getById")
        .send({ id: _id }) // getting token from db using user's id
      const { refreshToken } = findTokenByUserId.body.token // we should take refresh token from response
      expect(refreshToken).toBe(AuthTestingTools.refreshToken) // check whether token, that we just received is same as token, that we received at creating of user
    })
  })
  describe("delete", () => {
    test("delete", async () => {
      const response = await request(app)
        .delete("/users/deleteOneUser")
        .send(AuthTestingTools.username) // sending username to delete itself
      const { email, username, password } = response.body.userWithTokens.user // getting necessary data
      const { refreshToken } = response.body.userWithTokens.refreshToken // also getting token from data
      AuthTestingTools.successMatcher(response.body.message) // expect to match success
      expect(refreshToken).toBe(AuthTestingTools.refreshToken) // check if tokens are the same
      AuthTestingTools.testPasswordVerify(password) // check if passwords are equals
      AuthTestingTools.userDataVerify([email, username]) // check if email & username are correct
    })
  })
})
