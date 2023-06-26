const express = require('express')

require('dotenv').config()

const app =express()

app.get('/', (req, res)=>{
    res.send("this is basic end point")
})

app.listen(process.env.PORT, ()=>{
    console.log(`listening the port ${process.env.PORT}`)
})