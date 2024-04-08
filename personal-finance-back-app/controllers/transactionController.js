const { sql } = require("../database/connectionToServer");

const getTransactions = async (req, res) => {
  const result = await sql`select * from transactions
    select transactions.id, amount, category_id, categories.name categories_name from transactions left join categories on transactions.category_id = categories.id;  `;
  res.json(result);
};

const createTransactions = async (req, res) => {
  console.log({ req });
  const { categoryName, amount } = req.body;
  await sql`insert into transactions(id, amount, category_name) values(${Date.now()}, ${categoryName}), ${amount}`;
  res.json([{ status: "Success!!" }]);
};

// router.put("/:id", async (req, res) => {
//   const { id } = req.params;
//   const { title } = req.body;
//   await sql`update transactions set title = ${title} where id = ${id}`;
//   res.sendStatus(204);
// });

// router.delete("/:id", async (req, res) => {
//   const { id } = req.params;
//   await sql`delete from transactions where id = ${id}`;
//   res.sendStatus(204);
// });

module.exports = { getTransactions, createTransactions };
