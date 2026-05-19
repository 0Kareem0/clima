import { useState } from "react";

export default function Header({ handleCitySearch }) {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
     if (inputValue.trim()) {
      handleCitySearch(inputValue.trim());
      setInputValue("");
    }
  };   

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-xl font-bold">☀️ clima</h1>

      <div className="flex gap-6 text-sm text-gray-300">
        <span>Today</span>
        <span>10-Day</span>
        <span>Maps</span>
        <span>Radar</span>
      </div>

      <form className="flex gap-2" onSubmit={onSubmit}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Search city..."
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors" type="submit">Search</button>
      </form>
    </div>
  );
}
