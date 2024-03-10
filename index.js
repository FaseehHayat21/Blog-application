const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.json({ limit: '10mb' }));

mongoose.connect('mongodb://127.0.0.1:27017').then(
    app.listen(1000, ()=>{
        console.log("Blog Application Server is Running")
    })
).catch(()=>{
    console.log("Datavase Error")
})
app.use('/api/auth', require('./routes/auth'))
app.use('/api/blogs', require('./routes/blogs'))

app.get('/',(req,res)=>{
    app.use(express.static(path.resolve(__dirname, "Blog-App","dist")))
    res.sendFile(path.resolve(__dirname, "Blog-App","dist","index.html"))
});

