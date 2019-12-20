const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const helmet = require('helmet')
require('./db')
const routes = require('./routes')
const bcrypt = require('bcryptjs');
const session = require('express-session');
const cors = require('cors');

//MIDDLEWARE
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
    secret: 'Coheed and Cambria', //some random string
    resave: false,
    saveUninitialized: false
}));
// app.use(express.json());
app.use(helmet())
app.use('/api', routes)



module.exports = app
