import { useEffect } from "react";
import { IWeather } from "../interfaces/IWeather";
import "./DisplayData.css";

interface IDisplayDataProps {
    weatherData: IWeather,
    setBackgroundHome: React.Dispatch<React.SetStateAction<string>>
}

const DisplayData: React.FC<IDisplayDataProps> = ({ weatherData, setBackgroundHome }) => {

    useEffect(() => {
        switch(true) {
            case (
                weatherData.weather[0].main === 'Clouds' || 
                weatherData.weather[0].main === 'Rain'
            ):
                setBackgroundHome('cloudy');
                break;
            case (weatherData.weather[0].main === 'Clear'):
                setBackgroundHome('sunny');
                break;
            case (weatherData.weather[0].main === 'Mist'):
                setBackgroundHome('mist');
                break;
        }
    }, [weatherData, setBackgroundHome])

    const sunriseDate = new Date(weatherData.sys.sunrise * 1000);
    const sunsetDate = new Date(weatherData.sys.sunset * 1000);
    const sunriseTime = sunriseDate.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
    const sunsetTime = sunsetDate.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });

    return (  
        <div key={weatherData.id} className="show__results">
            <div className="weather__header">
                <p className="weather__description">
                    {`${weatherData.weather[0].description} in ${weatherData.name}, ${weatherData.sys.country}`}
                </p>
                <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="weather-img" />
            </div>

            <div className="weather__temperatures">
                <p>Current: <span>{Math.round(weatherData.main.temp - 273.15)} °C</span></p>
                <p>Feels like: <span>{Math.round(weatherData.main.feels_like - 273.15)} °C</span></p>
                <p>Max: <span>{Math.round(weatherData.main.temp_max - 273.15)} °C</span></p>
                <p>Min: <span>{Math.round(weatherData.main.temp_min - 273.15)} °C</span></p>
            </div>

            <div className="weather__details">
                <p>Humidity: <span>{weatherData.main.humidity} %</span></p>
                <p>Wind speed: <span>{Math.round(weatherData.wind.speed * 3.6)} km/h</span></p>
                <p>Sunrise time: <span>{sunriseTime}</span></p>
                <p>Sunset time: <span>{sunsetTime}</span></p>
            </div>
        </div>
    );
}

export default DisplayData;