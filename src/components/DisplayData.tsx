import { IWeather } from "../interfaces/IWeather";

interface IDisplayDataProps {
    weatherData: IWeather
}

const DisplayData: React.FC<IDisplayDataProps> = ({ weatherData }) => {
    return (  
        <div key={weatherData.id} className="show__results">
            <p>
                {`${weatherData.weather[0].description} in ${weatherData.name}, ${weatherData.sys.country}`}
            </p>
            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="weather-img" />
            <p>
                Aktuell: {Math.round(weatherData.main.temp - 273.15)} °C
            </p>
            <p>
                Windgeschwindigkeit: {Math.round(weatherData.wind.speed * 3.6)} km/std
            </p>
        </div>
    );
}

export default DisplayData;