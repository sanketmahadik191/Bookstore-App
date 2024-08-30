const express = require('express');
const {getBook,addBook,searchBook,userBooks , editBooks} = require('../controllers/book.controller');

const app = express();

const router = express.Router();

router.get('/get',getBook);
router.post('/add',addBook);
router.get('/search',searchBook);
router.get('/userBooks/:id',userBooks);
router.post('/editBooks/:id',editBooks);

module.exports = router;