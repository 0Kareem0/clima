export default function SunCard({ data }) {
  return (
    <div className="bg-slate-800 p-6 rounded-2xl flex justify-between text-sm">
      <div>
        <p className="text-gray-400">Sunrise:</p>
        <p className="text-white font-semibold">{data?.forecast?.forecastday[0]?.astro?.sunrise}</p>
      </div>

      <div>
        <p className="text-gray-400">Sunset:</p>
        <p className="text-white font-semibold">{data?.forecast?.forecastday[0]?.astro?.sunset}</p>
      </div>
    </div>
  );
}