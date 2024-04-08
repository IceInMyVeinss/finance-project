const express = require("express");
const cors = require("cors");
const sql = require("./database/connectionToServer");
const transactionRouter = require( "./routers/transactionRouter");
const categoryRouter = require("./routers/categoryRouter");

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.use("/transactions", transactionRouter);
app.use("/categories", categoryRoutr);

app.get("/", (req, res) => {
  res.send("hello world");
});

// app.post("/create-user", async (req, res) => {
//   const { name, email, password, avatar_img } = req.body;
//   const createUser =
//     await sql`insert into users( name, email, password, avatar_img) values(${name}, ${email}, ${password}, ${avatar_img}) `;
//   res.json(createUser);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
