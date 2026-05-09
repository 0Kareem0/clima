export default function HourlyForecast({ data }) {
  const allHours =
    data?.forecast?.forecastday?.[0]?.hour || [];
    
  // if i want to only display the next 6 hours, i can use slice
  // const currentHour = new Date().getHours();
  // const hours = allHours.slice(currentHour, currentHour + 6);  

  return (
    <div className="bg-slate-800 p-6 rounded-2xl">
      <h2 className="mb-4">Hourly Forecast</h2>

      <div className="flex justify-between text-center text-sm">
        {allHours.map((h, i) => (
          <div key={i}>
            <p>
              {new Date(h.time).toLocaleTimeString([], {
                hour: "numeric",
                hour12: true,
              })}
            </p>
            <img
              className="w-9 h-9"
              src={h.condition.icon}
              alt={h.condition.text}
            />

            <p>{h.temp_c}°</p>
          </div>
        ))}
      </div>
    </div>
  );
}
