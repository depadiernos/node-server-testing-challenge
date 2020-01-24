const request = require("supertest")
const db = require("../data/db-config")
const server = require("../index")

beforeEach(async () => {
  await db.seed.run()
})

describe("items router", () => {
  test("get list of items return 200 and json object", async () => {
    const res = await request(server).get("/items")
    expect(res.status).toBe(200)
    expect(res.type).toBe("application/json")
  })

  test("get list of items return 3 items", async () => {
    const res = await request(server).get("/items")
    expect(res.body.length).toBe(3)
  })

  test("add item to list returns 201 and json object", async () => {
    const res = await request(server)
      .post("/items")
      .send({ name: "Book" })
    expect(res.status).toBe(201)
    expect(res.type).toBe("application/json")
  })

  test("add item to list returns 'Book'", async () => {
    const res = await request(server)
      .post("/items")
      .send({ name: "Book" })
    expect(res.body.name).toBe("Book")
  })

  test("delete item from list", async () => {
    const res = await request(server).delete("/items/1")
    expect(res.status).toBe(204)
  })

  test("delete item from list", async () => {
    const res = await request(server).delete("/items/1")
    const items = await db("items")
    expect(items.length).toBe(2)
  })
})
