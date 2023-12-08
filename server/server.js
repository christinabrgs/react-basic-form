const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const connectDB = require('./config/connectDB')

connectDB ()

app.listen(port, () => {console.log(`server is running on port ${port}`)})