const DotLoader = () => {
  return (
    <div className="relative w-16 h-4">
      {/* Left & Right dots (background equivalent) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>

      {/* Moving center dot */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3 h-3 bg-orange-500 rounded-full animate-dotMove"></div>
      </div>
    </div>
  );
};

export default DotLoader;