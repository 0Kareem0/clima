import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard ";
import HourlyForecast from "./components/HourlyForecast";
import AirQualityCard from "./components/AirQualityCard";
import ForecastCard from "./components/ForecastCard";
import SunCard from "./components/SunCard";
import { useEffect, useState } from "react";
export default function App() {

      const [data, setData] = useState(null);
    const [city, ] = useState("suez");
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    const getWeather = async () => {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`,
      );
      const data = await res.json();
      setData(data);
    };
    getWeather();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white p-6">
      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 space-y-6">
          <WeatherCard data={data} />
          <HourlyForecast />
        </div>

        <div className="space-y-6">
          <AirQualityCard />
          <ForecastCard />
          <SunCard />
        </div>
      
        {/* <div>
          <h1>{data?.location?.name}</h1>
          <p>{data?.current?.temp_c}°C</p>
        </div> */}
      </div>
 
    </div>
  );
}
