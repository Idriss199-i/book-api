const express = require('express')
const router = express.Router()
const {createBook, getBooks, updateBook, deleteBook, getBookById} = require('../controllers/bookcontrollers')
const authMiddleware = require("../middleware/middleware")


router.post('/', authMiddleware, createBook)
router.get('/', getBooks)
router.get('/:id',authMiddleware, getBookById)
router.put('/:id', authMiddleware, updateBook)
router.delete('/:id', authMiddleware, deleteBook)

module.exports = router
