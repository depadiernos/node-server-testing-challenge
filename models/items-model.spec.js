const db = require("./data/db-config")
const itemsModel = require("./items-model")

beforeEach(async () => {
  await db.seed.run()
})

describe("items model", ()=>{
  test("list", async ()=>{
    const res = await ite
  })
})