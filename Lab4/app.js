/*
Lab 4
Group Members:
- Yashvi Patel: 100900705
- Justin Wastle: 100869386
- Andrew Mekhail: 100828858
Date: April 19, 2024 
*/


const express = require('express');
const bodyParser = require('body-parser');
const pug = require('pug');
const animal = require('./routes/animal.router');
require('dotenv').config();

// initialize method
const app = express();
// use port from env or default to 3000 if not set
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({extended: false}));

// configure routes
app.use('/', animal);

app.use('/animals', animal);

// setup template engine
app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");


// Listent on port
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})