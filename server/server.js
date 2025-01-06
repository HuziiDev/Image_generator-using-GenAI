import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/mongodb.js'

const PORT = process.env.PORT
const app = express()
app.use(express.json())
app.use(cors())

 connectDb()
app.get('/', (req,res)=>{
    res.send("Hello World")
})


app.listen(PORT, ()=>{
    console.log("Server is running on", PORT)
})