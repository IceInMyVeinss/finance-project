const express = require("express");
const categoryRouter = express.Router();
const { getCategories, createCategorie } = require("../controllers/categoryController");


categoryRouter.get("/", getCategories);
categoryRouter.post("/",createCategorie);

module.exports = categoryRouter;