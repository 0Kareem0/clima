import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard ";
import HourlyForecast from "./components/HourlyForecast";
import AirQualityCard from "./components/AirQualityCard";
import ForecastCard from "./components/ForecastCard";
import SunCard from "./components/SunCard";
import { useEffect, useState } from "react";

export default function App() {
  const [posts, setPosts] = useState([]);

    useEffect(() => {
      const getData = async () =>{
      const res = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data = await res.json()
      setPosts(data)
      }
      
      getData()
  }, []);

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
      {posts.map((post) => (
        <div 
        className="bg-slate-800 p-6 rounded-2xl mt-6"
        key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}