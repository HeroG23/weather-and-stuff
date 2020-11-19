const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

module.exports = {
  getWeatherByZip: async (req, res) => {
    const { city } = req.query;
    console.log(city);
    const weather = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
    );
    if (weather.data) {
        console.log(weather.data)
      res.status(200).send(weather.data);
    } else {
      res.status(409).send("Nope");
    }
  },
};
