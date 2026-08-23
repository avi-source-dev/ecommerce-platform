import { useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Products from "../pages/Products"

const CategoryProductsPage = () => {
  const { categoryId } = useParams();

  const [filters, setFilters] = useState({
    search: "",
    category: "all",
    maxPrice: 5000,
    availability: "all",
    rating: "all",
  });

  const categories = {
    grocery: [
      "Fruits",
      "Vegetables",
      "Snacks",
      "Beverages",
      "Dairy",
      "Bakery",
    ],

    electronics: [
      "Mobiles",
      "Laptops",
      "Tablets",
      "Headphones",
      "Cameras",
      "Smart Watches",
    ],

    fashion: [
      "Men",
      "Women",
      "Kids",
      "Shoes",
      "Bags",
      "Accessories",
    ],

    freasitems:[
      "break",
      "biskit",
      "kaju kaltli"

    ]
  };

  const currentCategories = categories[categoryId] || [];

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)
  };

  return (
    <div className="flex gap-8 p-6">
      <Sidebar
        categories={currentCategories}
        onFilterChange={handleFilterChange}
      />

      <main className="flex-1">
        <Products 
        categoryId={categoryId}
        filters={filters}
        />
      </main>
    </div>
  );
};

export default CategoryProductsPage;