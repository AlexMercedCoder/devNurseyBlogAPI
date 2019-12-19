// ./lib/routes/index.js
const express = require('express')
const router = express.Router()
const Blogs = require('./controllers/blog.js')
const Users = require('./controllers/users.js')
router.use('/users', Users)
router.use('/blogs', Blogs)
// Add more routes here if you want!
module.exports = router
