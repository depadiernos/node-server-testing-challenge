exports.seed = async (knex) => {
  await knex("items").truncate()
};