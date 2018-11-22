const express = require("express");
const app = express();
const ejs = require('ejs');
const port = process.env.PORT || 4200;
const path = require("path");
const fetch = require('node-fetch');

// Imports

const config = require('./config/config.js');

// Youtube API url
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLgZ-2UL8fjcQ5SYWOko2E2cD0HtwZ3FoI&key=${config.key}`;

//Middlewares

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "config")));

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
    console.log(config);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            res.render("tosekwatv", { fetchData: data });
        })
        .catch(err => { console.log(err) });
});

app.listen(port);