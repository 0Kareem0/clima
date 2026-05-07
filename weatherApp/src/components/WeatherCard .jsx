export default function WeatherCard({ data }) {
  return (
    <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold">{data?.location?.name}</h2>
      <p className="text-gray-400 text-sm">Sunday, May 3</p>

      <div className="flex items-center gap-6 mt-4">
        <h1 className="text-6xl font-bold">{data?.current?.temp_c}°C</h1>
        <span className="text-blue-400">Clear Skies</span>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-6 text-sm text-gray-300">
        <div>
          <p>Feels Like</p>
          <p className="text-white font-semibold">29°</p>
        </div>
        <div>
          <p>Humidity</p>
          <p className="text-white font-semibold">28%</p>
        </div>
        <div>
          <p>Wind</p>
          <p className="text-white font-semibold">12 km/h</p>
        </div>
        <div>
          <p>UV</p>
          <p className="text-yellow-400 font-semibold">4 Moderate</p>
        </div>
      </div>
    </div>
  );
}
