import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import HourlyForecast from "./components/HourlyForecast";
import AirQualityCard from "./components/AirQualityCard";
import ForecastCard from "./components/ForecastCard";
import SunCard from "./components/SunCard";
import { useEffect, useState } from "react";
export default function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("suez");
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    const getWeather = async () => {
      const res = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=yes&alerts=yes`,
      );
      const data = await res.json();
      setData(data);
    };
    getWeather();
  }, [city]);

  const handleCitySearch = (newCity) =>{
    setCity(newCity)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white p-6">
      <Header handleCitySearch={handleCitySearch} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 space-y-6">
          <WeatherCard data={data} />
          <HourlyForecast data={data} />
        </div>

        <div className="space-y-6">
          <AirQualityCard data={data} />
          <ForecastCard data={data} />
          <SunCard data={data} />
        </div>
      </div>
    </div>
  );
}
