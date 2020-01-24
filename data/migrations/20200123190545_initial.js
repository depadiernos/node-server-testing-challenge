exports.up = async (knex) => {
  await knex.schema.createTable("items", (table) => {
    table.increments()
    table.string("name", 255).notNullable()
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("items")
}
