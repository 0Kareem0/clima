export default function ForecastCard({ data }) {
  const days = data?.forecast?.forecastday?.map((d) => ({
    day: d.date,
    temp: `${d.day.maxtemp_c}° / ${d.day.mintemp_c}°`,
  })) || [
    { day: "Mon", temp: "31° / 19°" },
    { day: "Tue", temp: "28° / 20°" },
    { day: "Wed", temp: "33° / 21°" },
    { day: "Thu", temp: "30° / 18°" },
    { day: "Fri", temp: "29° / 20°" },
  ];  

  return (
    <div className="bg-slate-800 p-6 rounded-2xl">
      <h2 className="mb-4">7-Day Forecast</h2>

      {days.map((d, i) => (
        <div key={i} className="flex justify-between py-2 text-sm">
          <span>{d.day}</span>
          <span>{d.temp}</span>
        </div>
      ))}
    </div>
  );
}