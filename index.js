const { application } = require("express");
const express = require("express");

const app = express();

const dbConfig= require('./db');

const roomsroute = require('./routes/roomsRoute');

const bookingroutes = require('./routes/bookingsRoute');

app.use('/api/room',roomsroute);

app.use('/api/bookings',bookingroutes);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Your app is running with ${port}`));