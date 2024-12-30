import { useState } from "react";
import "./Home.css";
import { IWeather } from "../interfaces/IWeather";
import getWeatherData from "../utils/fetches/getWeatherData";
import DisplayData from "../components/DisplayData";

const Home = () => {

    const [weatherData, setWeatherData] = useState<IWeather | null>(null);

    return (  
        <section className="home">
            <div className="location__buttons">
                <button onClick={() => getWeatherData(setWeatherData, 'Hamburg')}>Hamburg</button>
                <button onClick={() => getWeatherData(setWeatherData, 'Berlin')}>Berlin</button>
                <button onClick={() => getWeatherData(setWeatherData, 'Cologne')}>Köln</button>
                <button onClick={() => getWeatherData(setWeatherData, 'Joao Pessoa')}>Brasilien</button>
            </div>
                {!weatherData ? '' : (
                    <DisplayData weatherData={weatherData} />
                )}
        </section>
    );
}

export default Home;