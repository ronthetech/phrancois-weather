import { useState } from "react";
import "./App.css";
import Search from "./components/search/Search";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
import CurrentWeather from "./components/current/CurrentWeather";
import Forecast from "./components/forecast/Forecast";

function App() {
  const [currentWeatherFrom, setCurrentWeatherFrom] = useState(null);
  const [currentWeatherTo, setCurrentWeatherTo] = useState(null);
  const [forecastFrom, setForecastFrom] = useState(null);
  const [forecastTo, setForecastTo] = useState(null);

  const handleOnSearchChangeFrom = (searchData) => {
    const [latitude, longitude] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=imperial`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=imperial`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeatherFrom({ city: searchData.label, ...weatherResponse });
        setForecastFrom({ city: searchData.label, ...forecastResponse });
      })
      .catch(console.log);
  };

  const handleOnSearchChangeTo = (searchData) => {
    const [latitude, longitude] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=imperial`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=imperial`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeatherTo({ city: searchData.label, ...weatherResponse });
        setForecastTo({ city: searchData.label, ...forecastResponse });
      })
      .catch(console.log);
  };

  return (
    <>
      <h1 className="title">Phrancois Weather</h1>
      <div className="container">
        <div className="search">
          <h1>Your Location</h1>
          <Search onSearchChange={handleOnSearchChangeFrom} />
          {currentWeatherFrom && <CurrentWeather data={currentWeatherFrom} />}
          {forecastFrom && <Forecast data={forecastFrom} />}
        </div>
        <div className="search">
          <h1>Destination</h1>
          <Search onSearchChange={handleOnSearchChangeTo} />
          {currentWeatherTo && <CurrentWeather data={currentWeatherTo} />}
          {forecastTo && <Forecast data={forecastTo} />}
        </div>
      </div>
    </>
  );
}

export default App;
