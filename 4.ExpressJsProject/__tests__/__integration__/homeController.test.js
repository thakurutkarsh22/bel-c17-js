const request = require("supertest");
const app = require("../../app");


describe("Home Controller Integration Tests", () => {
    describe("GET /api/v1/", () => {
        
        it("should return 201 OK and welcome message", async () => {
            const res = await request(app).get("/api/v1/");
            expect(res.statusCode).toBe(200);
            // expect(res.body).toBe("Hello, World! express");
        });
    });
});