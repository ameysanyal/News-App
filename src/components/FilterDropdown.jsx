const FilterDropdown = ({ categories, selectedCategory, onCategoryChange }) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="w-full max-w-sm mx-auto">
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="w-full p-1 border border-gray-300 rounded-md"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {capitalizeFirstLetter(category)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
