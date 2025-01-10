import { useState } from "react";
import "./Home.css";
import { IWeatherData } from "../interfaces/IWeatherData";
import { getWeatherData } from "../utils/fetches/getWeatherData";
import WeatherDetails from "../components/WeatherDetails";

const Home = () => {

    const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);
    const [input, setInput] = useState<string>('');
    const [backgroundHome, setBackgroundHome] = useState<string>('sunny');
    const [error, setError] = useState<string>('');

    const handleSearchClick = (setWeatherData: React.Dispatch<React.SetStateAction<IWeatherData | null>>, input: string, setError: React.Dispatch<React.SetStateAction<string>>) => {
        getWeatherData(setWeatherData, input, setError);
        setInput('');
    }

    return (  
        <section className={`home ${backgroundHome}`}>
            <div className="location__buttons">
                <button onClick={() => getWeatherData(setWeatherData, 'Hamburg', setError)}>
                    Hamburgs
                </button>
                <button onClick={() => getWeatherData(setWeatherData, 'Berlin', setError)}>
                    Berlin
                </button>
                <button onClick={() => getWeatherData(setWeatherData, 'Cologne', setError)}>
                    Köln
                </button>
                <button onClick={() => getWeatherData(setWeatherData, 'Joao Pessoa', setError)}>
                    Brasilien
                </button>
            </div>
            <div className="search__city">
                <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="type the city name" />
                <button onClick={() => handleSearchClick(setWeatherData, input, setError)} aria-label="Search for weather">
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
                    error ? (
                        <p className="error">{error}</p>
                    ) : (
                        <WeatherDetails weatherData={weatherData} setBackgroundHome={setBackgroundHome} />
                    )
                )}
        </section>
    );
}

export default Home;