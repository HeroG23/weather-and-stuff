require("dotenv").config();
const express = require("express");
const ctrl = require('./ctrl/controller')

const { SERVER_PORT } = process.env;

const app = express();

app.get('/api/weather', ctrl.getWeatherByZip)

app.listen(SERVER_PORT, ()=>console.log(`Server listening on port ${SERVER_PORT}`))