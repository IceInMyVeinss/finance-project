const express = require('express');
const router = express.Router();
const {getTransactions, createTransactions,} = require("../controllers/transactionController");

router.get("/", getTransactions);
router.post("/", createTransactions);

module.exports = router;