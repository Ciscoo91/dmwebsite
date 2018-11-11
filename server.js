const express = require("express");
const app = express();
const ejs = require('ejs');
const port = process.env.PORT || 4200;
const path = require("path");

//Middlewares

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
//Routes

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/livres', (req, res) => {
    res.render('livres');
});

app.get('/biographie', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render("contact");
});

app.get('/tosekwatv', (req, res) => {
    res.render("tosekwatv");
});

app.listen(port);