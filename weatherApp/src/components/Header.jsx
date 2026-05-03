export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-xl font-bold">☀️ clima</h1>

      <div className="flex gap-6 text-sm text-gray-300">
        <span>Today</span>
        <span>10-Day</span>
        <span>Maps</span>
        <span>Radar</span>
      </div>

      <input
        placeholder="Search city..."
        className="bg-slate-800 px-4 py-2 rounded-full text-sm"
      />
    </div>
  );
}