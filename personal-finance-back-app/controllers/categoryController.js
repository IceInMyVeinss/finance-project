const { sql } = require("../database/connectionToServer");
var { nanoid } = require("nanoid");
var ID = nanoid();
const getCategories = async (req, res) => {
  const result = await sql`select * from categories`;
  res.json(result);
};

const createCategories = async (req, res) => {
  const { addCategory } = req.body;
  const result =
    await sql`insert into categories(name, id) values(${addCategory}, ${ID()})`;
  console.log(addCategory, "hello");
  res.json(result);
};

module.exports = { getCategories, createCategorie };
