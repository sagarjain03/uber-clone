const express = require('express')
const app = express();
const dotenv = require('dotenv')
const userRoutes = require("./routes/user.routes")
const cookieParser = require('cookie-parser')
dotenv.config()
const cors = require('cors')
const connectDb = require("./db/db")
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended :true}))
app.use(cookieParser())
connectDb()
app.get("/",(req,res)=>{
  res.send("hello world")
})
app.use('/user',userRoutes)

module.exports = app