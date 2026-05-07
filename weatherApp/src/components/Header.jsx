import { useState } from 'react';

export default function Header({ handleCitySearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
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

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search city..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}