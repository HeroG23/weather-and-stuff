import axios from "axios";
import { useState } from "react";
import Display from "./Display";

export default function Input() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({
    location: "",
    current: { condition: "" },
  });

  const getWeather = async (e) => {
    e.preventDefault();
    let localWeather = await axios.get(`/api/weather?city=${city}`);
    console.log(localWeather.data);
    setWeather(localWeather.data);
  };

  return (
    <div>
      {console.log(weather)}
      {console.log(city)}
      <form onSubmit={(e) => getWeather(e)}>
        <input
          type="text"
          name="city"
          onChange={(e) => setCity(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>

      <Display localWeather={weather} />
    </div>
  );
}
