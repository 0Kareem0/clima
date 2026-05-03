export default function SunCard() {
  return (
    <div className="bg-slate-800 p-6 rounded-2xl flex justify-between text-sm">
      <div>
        <p className="text-gray-400">Sunrise</p>
        <p className="text-white font-semibold">5:48 AM</p>
      </div>

      <div>
        <p className="text-gray-400">Sunset</p>
        <p className="text-white font-semibold">7:12 PM</p>
      </div>
    </div>
  );
}