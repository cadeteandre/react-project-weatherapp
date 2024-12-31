import { useState } from "react";
import "./Home.css";
import { IWeather } from "../interfaces/IWeather";
import DisplayData from "../components/DisplayData";
import { getWeatherData } from "../utils/fetches/getWeatherData";

const Home = () => {

    const [weatherData, setWeatherData] = useState<IWeather | null>(null);
    const [input, setInput] = useState<string>('');
    const [backgroundHome, setBackgroundHome] = useState<string>('sunny');

    return (  
        <section className={`home ${backgroundHome}`}>
            <div className="location__buttons">
                <button onClick={() => getWeatherData(setWeatherData, 'Hamburg')}>
                    Hamburg
                </button>
                <button onClick={() => getWeatherData(setWeatherData, 'Berlin')}>
                    Berlin
                </button>
                <button onClick={() => getWeatherData(setWeatherData, 'Cologne')}>
                    Köln
                </button>
                <button onClick={() => getWeatherData(setWeatherData, 'Joao Pessoa')}>
                    Brasilien
                </button>
            </div>
            <div className="search__city">
                <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="type the city name" />
                <button onClick={() => getWeatherData(setWeatherData, input)}>
                    Search
                </button>
            </div>
                {!weatherData ? (
                    <div className="skeleton">
                        <div className="skeleton-line"></div>
                        <div className="skeleton-line"></div>
                        <div className="skeleton-line"></div>
                        <div className="skeleton-line"></div>
                    </div>
                ) : (
                    <DisplayData weatherData={weatherData} setBackgroundHome={setBackgroundHome} />
                )}
        </section>
    );
}

export default Home;