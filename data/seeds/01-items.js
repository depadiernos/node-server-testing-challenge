exports.seed = async (knex) => {
  await knex("items").insert([
    {
      name: "Pencil",
    },
    {
      name: "Paper",
    },
    {
      name: "Eraser",
    }
  ])
}