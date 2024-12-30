import { IWeather } from "../../interfaces/IWeather";

const API_KEY = import.meta.env.VITE_API_KEY;

async function getWeatherData(setFunc: React.Dispatch<React.SetStateAction<IWeather | null>>, locationName: string): Promise<void> {

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${API_KEY}`);

        const data: IWeather = await response.json();

        setFunc(data);
    } catch(error) {
        console.error('Fetch error: ', error);
    }
}

export default getWeatherData;