const SearchBar = ({ onSearch }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search news..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full p-1 border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default SearchBar;
