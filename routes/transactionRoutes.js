const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");

router.get("/", (req, res) => {
  res.send("Transaction route is working");
});

const {
  checkTransactionStatus,
  checkBalance,
  getHistory,
  transfer,
  getAccountName
} = require("../controllers/transactionController");

router.get("/name-enquiry/:accountNumber", getAccountName);

router.post("/transfer", auth, transfer);

 router.get("/history", auth, getHistory);

 router.get("/balance/:accountNumber", auth, checkBalance);

  router.get("/status/:ref", auth, checkTransactionStatus);
module.exports = router;

