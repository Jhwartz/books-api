const express = require('express');
const dotenv = require('dotenv');
const books = require('./books');
const logger = require('express');
const router = require('./routes/booksRoute');


dotenv.config();
const app = express();

//middleware
app.use(logger);
app.use(express.json());

//route
app.get("/", (req, res) =>{
    res.send("<h1>Welcome to ElQodesh Library Stockpile</h1>")
})
//get all results
app.get("/books", (req, res) =>{
    res.json(books)
})


const PORT = process.env.PORT || 9000;

app.listen(PORT,  ()=>{
    console.log(`server running on ${PORT}`)
})


