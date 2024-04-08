const express = require("express");
const categoryRouter = express.Router();
const { getCategories, createCategories } = require("../controllers/categoryController");


categoryRouter.get("/", getCategories);
categoryRouter.post("/",createCategories);

module.exports = categoryRouter;