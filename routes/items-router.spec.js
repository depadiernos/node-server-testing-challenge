const db = require("./data/db-config")
const server = require("../index")

beforeEach(async () => {
  await db.seed.run()
})

describe("items router", () => {
  test("get list of items", async () => {
    const res = await request(server).get("/items")
    expect(res.status).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.length).toBe(3)
  })

  test("add item to list", async () => {
    const res = await request(server)
      .post("/items")
      .send({ name: "Book" })
    expect(res.status).toBe(204)
    expect(res.type).toBe("application/json")
    expect(res.body.name).toBe("Book")
  })

  test("delete item to list", async () => {
    const res = await request(server)
      .delete("/items")
      .send({ id: 1 })
    expect(res.status).toBe(500)
  })
})
