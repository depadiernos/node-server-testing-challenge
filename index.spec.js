const request = require("supertest")
const server = require("./index")

test("root API endpoint", async () => {
  const res = await request(server).get("/")
  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
  expect(res.body.message).toBe("Todo API")
})
