# Weather App 🌦️

This is a simple weather forecast application built with **React** and **TypeScript**. It allows users to search for weather information by city and displays detailed weather data, including temperatures, wind speed, humidity, and more.

## 🌐 Live Demo

You can access the live version of this project here:  
[Weather App on Netlify](https://kdtweatherapp.netlify.app/)

## 📋 Features

- Search for weather data by city name.
- Quick access buttons for predefined cities.
- Displays detailed weather information:
  - Current, minimum, and maximum temperatures.
  - Feels-like temperature.
  - Humidity and wind speed.
  - Sunrise and sunset times.
- Dynamic background changes based on weather conditions (e.g., sunny, cloudy, misty).

## 🛠️ Technologies Used

- **React**: Frontend library for building the user interface.
- **TypeScript**: Strongly-typed language for enhanced developer experience.
- **CSS**: Styling for the components.
- **OpenWeather API**: Provides real-time weather data.

## 📂 Project Structure

- **src/**
  - **components/**
    - `WeatherDetails.tsx`: Component to display detailed weather data.
  - **interfaces/**
    - `IWeatherData.ts`: Interface for typing weather data.
  - **pages/**
    - `Home.tsx`: Main page with city search and quick access buttons.
  - **utils/fetches/**
    - `getWeatherData.ts`: Utility function to fetch weather data from the API.
  - **styles/**
    - `Home.css`: CSS styles for the Home component.
    - `WeatherDetails.css`: CSS styles for the WeatherDetails component.

## 🎨 How It Works

- **City Search**: Enter a city name in the search bar and click “Search” to fetch its weather data.
- **Quick Access**: Use the predefined buttons to view weather for specific cities.
- **Dynamic UI**: Background updates automatically based on the current weather conditions.

## 🌟 Acknowledgements

- OpenWeather API for weather data.
- React and TypeScript communities for extensive documentation and support.
