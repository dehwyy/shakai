import request from "supertest";
import app from "../src/app";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "..", '.env')});
const db = process.env.DATABASE || ""

describe("CRD cycle", () => {
    beforeAll(() => {
        mongoose.connect(db);
    });

    afterAll((done) => {
        mongoose.disconnect(done);
    });

    test("test",  async () => {
        const response = await request(app).get('/users')
        expect(response.statusCode).toBe(200)
    })
})