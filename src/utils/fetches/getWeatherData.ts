import { IWeatherData } from "../../interfaces/IWeatherData";

const API_KEY = import.meta.env.VITE_API_KEY;

export async function getWeatherData(setFunc: React.Dispatch<React.SetStateAction<IWeatherData | null>>, locationName: string, setError: React.Dispatch<React.SetStateAction<string>>): Promise<void> {
    setError('');
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationName === '' ? 'Dusseldorf' : locationName}&appid=${API_KEY}`);

    const data: IWeatherData = await response.json();

    if(response.status === 404) {
        setError(`City not found: Error ${data.cod}`);
        return;
    } else {
        setFunc(data);
    }
}