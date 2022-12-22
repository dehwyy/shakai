const request = require("supertest")
const app = require("../dist/app.js").default



describe("Test the root path", () => {
    test("It should response the GET method", done => {
        request(app).get("/").expect("ABOBA").end(done)
    });
});