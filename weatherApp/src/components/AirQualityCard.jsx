export default function AirQualityCard({ data }) {
  return (
    <div className="bg-slate-800 p-6 rounded-2xl">
      <p className="text-gray-400">Air Quality:</p>

      <h1 className="text-4xl font-bold text-green-400 mt-2">{data?.current?.air_quality?.pm2_5}</h1>

      <div className="w-full bg-gray-700 h-2 rounded mt-4">
        <div className="bg-green-400 h-2 rounded w-1/4"></div>
      </div>
    </div>
  );
}