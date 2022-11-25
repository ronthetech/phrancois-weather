[![Netlify Status](https://api.netlify.com/api/v1/badges/f25e1cd6-3e4e-4641-85bf-c81f7962772f/deploy-status)](https://app.netlify.com/sites/phrancoisweather/deploys)

<a href="https://www.ronjeanfrancois.com/">
<img src="https://img.shields.io/badge/created%20by-@ronjtech-FD6A02.svg" alt="Created by Ron Jean-Francois">
</a>

# Phrancois Weather

Web application that allows you to check the weather for two different locations and compare. Great for planning a trip, it lets you see the current weather conditions as well as the projected forecast.

**Link to project:** [Phrancois Weather](https://phrancoisweather.netlify.app/)

![Phrancois Weather](https://ronthetech.github.io/image-repo/projects/phrancois-weather/phrancois-weather.png)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Nodejs, React, Vite

I built the application using React and Vite to leverage the speedy development that Vite enables. I was able to quickly see changes as they were made because of Hot Module Replacement, (HMR): which enables a module to "hot replace" itself without affecting the rest of the page.
I designed the application using two unique apis. I leveraged the GeoDB Cities API to collect geographic data for the input cities. Additionally, I implemented the OpenWeatherAPI to retrieve the weather data for each location. Finally, I designed a React frontend to make calls to both APIs as users enter new cities in the search bars.

## Data Flow:

When a user begins to enter a city into a search field, the input value is sent to GeoDB Cities API in an asynchronous call and the response sent back contains information including the longitude, latitude and country code for the city. The application then uses the coordinates from the response to make a new call to the OpenWeather API. The response then includes weather conditions as well as 5 day forecasts for the given cities.

<!-- ## Optimizations
*(optional)*

You don't have to include this section but interviewers *love* that you can not only deliver a final product that looks great but also functions efficiently. Did you write something then refactor it later and the result was 5x faster than the original implementation? Did you cache your assets? Things that you write in this section are **GREAT** to bring up in interviews and you can use this section as reference when studying for technical interviews! -->
