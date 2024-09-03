const express = require("express");
const {
  getBook,
  addBook,
  searchBook,
  userBooks,
  editBooks,
  getFreeBook,
} = require("../controllers/book.controller");
const authMiddleware = require("../middlewares/authMiddleware");

const app = express();

const router = express.Router();

router.get("/get", authMiddleware, getBook);
router.post("/addBook", authMiddleware, addBook);
router.get("/getFreeBook",  getFreeBook);
router.get("/search", authMiddleware, searchBook);
router.get("/userBooks/:id", authMiddleware, userBooks);
router.post("/editBooks/:id", authMiddleware, editBooks);

module.exports = router;
