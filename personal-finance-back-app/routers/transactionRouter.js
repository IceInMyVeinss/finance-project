const express = require('express');
const router = express.Router();
const { sql } =require("../database/connectionToServer");
const {getTransactions,} = require("../controllers/transactionController");

router.get("/", getTransactions);
// router.post("/", );

module.exports = router;