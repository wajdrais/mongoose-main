const express=require("express")
const { config } = require("./configuration/config")
const productRouter = require("./router/productRouter")
const userRouter = require("./router/userRouter")

const app= express()
const port=8000
app.use(express.json())
config()
app.use("/api",productRouter)
app.use("/",userRouter)
app.listen(port,()=>{
    console.log("server is runing")
})