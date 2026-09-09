import React, { useState } from "react";
const Sidebar = ({ categories=[], onFilterChange }) => {
  console.log(categories)
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(5000);
  const [availability, setAvailability] = useState("all");
  const [rating, setRating] = useState("all");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    onFilterChange?.({
      search,
      category,
      maxPrice,
      availability,
      rating,
    });
  };

  const handleSearch = (value) => {
    setSearch(value);

    onFilterChange?.({
      search: value,
      category: selectedCategory,
      maxPrice,
      availability,
      rating,
    });
  };

  const handlePriceChange = (value) => {
    setMaxPrice(Number(value));

    onFilterChange?.({
      search,
      category: selectedCategory,
      maxPrice: Number(value),
      availability,
      rating,
    });
  };

  const handleAvailabilityChange = (value) => {
    setAvailability(value);

    onFilterChange?.({
      search,
      category: selectedCategory,
      maxPrice,
      availability: value,
      rating,
    });
  };

  const handleRatingChange = (value) => {
    setRating(value);

    onFilterChange?.({
      search,
      category: selectedCategory,
      maxPrice,
      availability,
      rating: value,
    });
  };

  const handleReset = () => {
    setSearch("");
    setSelectedCategory("all");
    setMaxPrice(5000);
    setAvailability("all");
    setRating("all");

    onFilterChange?.({
      search: "",
      category: "all",
      maxPrice: 5000,
      availability: "all",
      rating: "all",
    });
  };

  return (
    <aside className="w-full lg:w-64 shrink-0">
      <div className="sticky top-5 rounded-2xl border border-gray-200 bg-white p-5">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">
            Filters
          </h2>

          <button
            onClick={handleReset}
            className="text-sm font-medium text-red-500 hover:text-red-600"
          >
          Reset
          </button>
        </div>

        {/* Search Products */}
        <div className="mb-7">
          <h3 className="mb-3 text-sm font-semibold text-gray-900">
            Search Products
          </h3>

          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2">
              🔍
            </span>

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              className="
                w-full
                rounded-xl
                border
                border-gray-200
                bg-gray-50
                py-2.5
                pl-10
                pr-3
                text-sm
                outline-none
                focus:border-gray-900
                focus:bg-white
              "
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-7">
          <h3 className="mb-3 text-sm font-semibold text-gray-900">
            Categories
          </h3>

          <div className="space-y-3">

            {/* All */}
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === "all"}
                onChange={() => handleCategoryChange("all")}
                className="h-4 w-4 accent-black"
              />

              <span className="text-sm text-gray-600">
                All Categories
              </span>
            </label>

            {/* Dynamic Categories */}
            {categories.map((category) => (
              <label
                key={category}
                className="flex items-center gap-3 cursor-pointer"
              >
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === category}
                  onChange={() => handleCategoryChange(category)}
                  className="h-4 w-4 accent-black"
                />

                <span className="text-sm text-gray-600">
                  {category}
                </span>
              </label>
            ))}

          </div>
        </div>

        {/* Price */}
        <div className="mb-7">
          <h3 className="mb-4 text-sm font-semibold text-gray-900">
            Price Range
          </h3>

          <div className="flex justify-between mb-3">
            <span className="text-sm text-gray-500">
              ₹0
            </span>

            <span className="text-sm font-semibold text-gray-900">
              ₹{maxPrice.toLocaleString()}
            </span>
          </div>

          <input
            type="range"
            min="0"
            max="5000"
            value={maxPrice}
            onChange={(e) => handlePriceChange(e.target.value)}
            className="w-full accent-black cursor-pointer"
          />
        </div>

        {/* Availability */}
        <div className="mb-7">
          <h3 className="mb-3 text-sm font-semibold text-gray-900">
            Availability
          </h3>

          <div className="space-y-3">

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="availability"
                checked={availability === "all"}
                onChange={() => handleAvailabilityChange("all")}
                className="h-4 w-4 accent-black"
              />

              <span className="text-sm text-gray-600">
                All Products
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="availability"
                checked={availability === "in-stock"}
                onChange={() => handleAvailabilityChange("in-stock")}
                className="h-4 w-4 accent-black"
              />

              <span className="text-sm text-gray-600">
                In Stock
              </span>
            </label>

          </div>
        </div>

        {/* Rating */}
        <div className="mb-7">
          <h3 className="mb-3 text-sm font-semibold text-gray-900">
            Customer Rating
          </h3>

          <div className="space-y-3">

            {[
              { value: "4", label: "★★★★☆ 4 & above" },
              { value: "3", label: "★★★☆☆ 3 & above" },
              { value: "2", label: "★★☆☆☆ 2 & above" },
            ].map((item) => (
              <label
                key={item.value}
                className="flex items-center gap-3 cursor-pointer"
              >
                <input
                  type="radio"
                  name="rating"
                  checked={rating === item.value}
                  onChange={() => handleRatingChange(item.value)}
                  className="h-4 w-4 accent-black"
                />

                <span className="text-sm text-gray-600">
                  {item.label}
                </span>
              </label>
            ))}

          </div>
        </div>

        {/* Reset Button */}
        <button
          onClick={handleReset}
          className="
            w-full
            rounded-xl
            bg-black
            px-4
            py-3
            text-sm
            font-semibold
            text-white
            hover:bg-gray-800
            transition
          "
        >
          Reset Filters
        </button>

      </div>
    </aside>
  );
};

export default Sidebar;