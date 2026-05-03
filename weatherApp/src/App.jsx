import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard ";
import HourlyForecast from "./components/HourlyForecast";
import AirQualityCard from "./components/AirQualityCard";
import ForecastCard from "./components/ForecastCard";
import SunCard from "./components/SunCard";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white p-6">
      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 space-y-6">
          <WeatherCard />
          <HourlyForecast />
        </div>

        <div className="space-y-6">
          <AirQualityCard />
          <ForecastCard />
          <SunCard />
        </div>
      </div>
    </div>
  );
}