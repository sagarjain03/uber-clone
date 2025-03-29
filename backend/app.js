const express = require('express')
const app = express();
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const connectDb = require("./db/db")
app.use(cors())
connectDb()
app.get("/",(req,res)=>{
  res.send("hello world")
})


module.exports = app