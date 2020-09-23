const db = require("../data/db-config")

const find = async () => {
  return await db("items")
}

const findById = async (id) => {
  return await db("items")
    .where({ id })
    .first()
}

const add = async (item) => {
  const [id] = await db("items").insert(item)
  return await findById(id)
}

const remove = async (id) => {
  return db("items")
    .where({ id })
    .del()
}

module.exports = {
  find,
  findById,
  add,
  remove
}
