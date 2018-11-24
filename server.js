const express = require("express");
const app = express();
const ejs = require('ejs');
const port = process.env.PORT || 4200;
const path = require("path");
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
let urlEncodedParser = bodyParser.urlencoded({ extended: false });

// Imports

const config = require('./config/config.js');

// Youtube API url
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLgZ-2UL8fjcQ5SYWOko2E2cD0HtwZ3FoI&key=${config.key}`;

// Mongoose

let Message = require('./model/database.js');


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

app.post('/contact', urlEncodedParser, (req, res) => {
    if (!req.body) {
        console.error(req);
        res.sendStatus(500);
    } else {
        let formData = req.body;
        console.log("form data: ", formData);

        // Get request params
        let firstName = req.body.firstname;
        let lastName = req.body.lastname;
        let email = req.body.email;
        let message = req.body.comment;

        // Create a new message Model
        let postedMessage = new Message({
            firstname: firstName,
            lastname: lastName,
            email: email,
            message: message
        });

        // Save this Object in the database
        postedMessage.save((err, postedMessage) => {
            if (err) {
                return console.error(err);
            }
            console.log('The message was posted successfuly');
        });

        res.redirect('contact');
    }
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