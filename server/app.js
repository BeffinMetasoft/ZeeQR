require("dotenv").config();

const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')

app.use(cors({
    origin: process.env.FRONT_END_PORT,
    credentials: true, //access-control-allow-credentials:true
  }))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

const authRouter = require('./routes/authRouter')
const userRouter = require('./routes/userRouter')
const cardRouter = require('./routes/cardRouter')

app.use('/api', authRouter)
app.use('/api', userRouter)
app.use('/api', cardRouter)




const {connectDb}=require('./config/connection')
connectDb()

app.use((err, req, res, next) => {
    const error = {
        success: false,
        status: err.status || 500,
        message: err.message || "Something went wrong",
    };
    res.status(error.status).json(error)
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));