const express = require("express");
const app = express();
const ejs = require('ejs');
const axios = require('axios');
const port = process.env.PORT || 4200;
const path = require("path");

//Middlewares

app.set("view engine", "html");
app.use(express.static(path.join(__dirname)));
//Routes

app.get('/', (req, res) => {
    res.render('livres');
});

app.listen(port);