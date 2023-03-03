const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const serie = require('./models/Blog')
app.use(express.static(path.join(__dirname, "public", "JS")))
mongoose.connect('mongodb://localhost:27017/blogsd')
.then(() => console.log("Data base connected")).catch((err) => console.log('error occured'))
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
const PORT = 5000


app.get('/',(req,res) => {
    res.render('index')
})

app.get('/new',(req,res) => {
    res.render('new_article')
})

app.listen(PORT, () => {
    console.log("Server is running");
})
