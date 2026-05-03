export default function HourlyForecast() {
  const hours = ["6 PM", "7 PM", "8 PM", "9 PM", "10 PM"];

  return (
    <div className="bg-slate-800 p-6 rounded-2xl">
      <h2 className="mb-4">Hourly Forecast</h2>

      <div className="flex justify-between text-center text-sm">
        {hours.map((h, i) => (
          <div key={i}>
            <p>{h}</p>
            <p className="text-yellow-400">☀️</p>
            <p>27°</p>
          </div>
        ))}
      </div>
    </div>
  );
}