const mongoose = require('mongoose');


mongoose.connect('mongodb://Ciscoo91:maravilhaC2!@ds115434.mlab.com:15434/dmumengi-test', { useNewUrlParser: true });

let db = mongoose.connection;
db.on('error', (err) => { console.error.bind(console, 'An error occured') });
db.once('open', () => {
  console.log('We are connected to the database');
});

// Database Schema

const messageSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  message: String
});

let Message = mongoose.model('Message', messageSchema);

module.exports = Message;