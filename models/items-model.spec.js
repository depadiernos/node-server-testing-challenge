const db = require("../data/db-config")
const itemsModel = require("./items-model")

beforeEach(async () => {
  await db.seed.run()
})

describe("items model", () => {
  test("list", async () => {
    const res = await itemsModel.find()
    expect(res.length).toBeGreaterThan(0)
  })
  test("findById", async () => {
    const res = await itemsModel.findById(1)
    expect(res.name).toBe("Pencil")
  })
  test("add", async () => {
    const res = await itemsModel.add({name: "Book"})
    expect(res.name).toBe("Book")
  })
  test("remove", async () => {
    const before = await itemsModel.find()
    await itemsModel.remove(1)
    const after = await itemsModel.find()
    expect(after.length).toBe(before.length - 1)
  })
})
