const express = require('express');
const router = express.Router();
const {books,book, addBook} = require('../controllers/bookRouter');

router.get('/books',books);
router.get('/book/:id',book);
router.post('/book',addBook);

module.exports = router;