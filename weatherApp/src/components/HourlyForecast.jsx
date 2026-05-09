export default function HourlyForecast({ data }) {
  const hours = data?.forecast?.forecastday[0]?.hour?.map((h) => h.time.split(" ")[1]) || [];

  return (
    <div className="bg-slate-800 p-6 rounded-2xl">
      <h2 className="mb-4">Hourly Forecast</h2>

      <div className="flex justify-between text-center text-sm">
        {hours.map((h, i) => (
          <div key={i}>
            <p>{h}</p>
            <p className="text-yellow-400">☀️</p>
            <p>{data?.forecast?.forecastday[0]?.hour[i]?.temp_c}°</p>
          </div>
        ))}
      </div>
    </div>
  );
}