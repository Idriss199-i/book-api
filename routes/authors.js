const express = require('express')
const router = express.Router()
const {createAuthor, getAuthors, updateAuthor, deleteAuthor, getAuthorById} = require('../controllers/authorcontrollers')
const authMiddleware = require('../middleware/middleware')


router.post('/', authMiddleware, createAuthor)
router.get('/', getAuthors)
router.get('/:id', authMiddleware, getAuthorById)
router.put('/:id',authMiddleware, updateAuthor)
router.delete('/:id',authMiddleware, deleteAuthor)


module.exports = router