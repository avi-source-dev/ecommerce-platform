import React from "react";

const products = [
  // ---------------- GROCERY ----------------
  {
    id: 1,
    name: "Fresh Red Apple",
    category: "grocery",
    subCategory: "Fruits",
    price: 120,
    rating: 4.5,
    emoji: "🍎",
    stock: true,
  },
  {
    id: 2,
    name: "Fresh Banana",
    category: "grocery",
    subCategory: "Fruits",
    price: 60,
    rating: 4.3,
    emoji: "🍌",
    stock: true,
  },
  {
    id: 3,
    name: "Fresh Broccoli",
    category: "grocery",
    subCategory: "Vegetables",
    price: 90,
    rating: 4.4,
    emoji: "🥦",
    stock: true,
  },
  {
    id: 4,
    name: "Fresh Carrot",
    category: "grocery",
    subCategory: "Vegetables",
    price: 70,
    rating: 4.2,
    emoji: "🥕",
    stock: true,
  },
  {
    id: 5,
    name: "Potato Chips",
    category: "grocery",
    subCategory: "Snacks",
    price: 40,
    rating: 4.1,
    emoji: "🍿",
    stock: true,
  },
  {
    id: 6,
    name: "Orange Juice",
    category: "grocery",
    subCategory: "Beverages",
    price: 110,
    rating: 4.6,
    emoji: "🧃",
    stock: false,
  },

  // ---------------- FASHION ----------------
  {
    id: 7,
    name: "Classic T-Shirt",
    category: "fashion",
    subCategory: "Men",
    price: 599,
    rating: 4.3,
    emoji: "👕",
    stock: true,
  },
  {
    id: 8,
    name: "Blue Jeans",
    category: "fashion",
    subCategory: "Men",
    price: 1299,
    rating: 4.5,
    emoji: "👖",
    stock: true,
  },
  {
    id: 9,
    name: "Women's Dress",
    category: "fashion",
    subCategory: "Women",
    price: 1499,
    rating: 4.6,
    emoji: "👗",
    stock: true,
  },
  {
    id: 10,
    name: "Running Shoes",
    category: "fashion",
    subCategory: "Shoes",
    price: 1999,
    rating: 4.4,
    emoji: "👟",
    stock: true,
  },
  {
    id: 11,
    name: "Leather Handbag",
    category: "fashion",
    subCategory: "Bags",
    price: 1799,
    rating: 4.2,
    emoji: "👜",
    stock: false,
  },
  {
    id: 12,
    name: "Sunglasses",
    category: "fashion",
    subCategory: "Accessories",
    price: 799,
    rating: 4.1,
    emoji: "🕶️",
    stock: true,
  },

  // ---------------- ELECTRONICS ----------------
  {
    id: 13,
    name: "iPhone 15",
    category: "electronics",
    subCategory: "Mobiles",
    price: 59999,
    rating: 4.7,
    emoji: "📱",
    stock: true,
  },
  {
    id: 14,
    name: "Samsung Galaxy",
    category: "electronics",
    subCategory: "Mobiles",
    price: 39999,
    rating: 4.5,
    emoji: "📱",
    stock: true,
  },
  {
    id: 15,
    name: "HP Laptop",
    category: "electronics",
    subCategory: "Laptops",
    price: 54999,
    rating: 4.4,
    emoji: "💻",
    stock: true,
  },
  {
    id: 16,
    name: "iPad",
    category: "electronics",
    subCategory: "Tablets",
    price: 42999,
    rating: 4.6,
    emoji: "📲",
    stock: true,
  },
  {
    id: 17,
    name: "Sony Headphones",
    category: "electronics",
    subCategory: "Headphones",
    price: 7999,
    rating: 4.5,
    emoji: "🎧",
    stock: true,
  },
  {
    id: 18,
    name: "Smart Watch",
    category: "electronics",
    subCategory: "Smart Watches",
    price: 2999,
    rating: 4.2,
    emoji: "⌚",
    stock: true,
  },
];

const Products = ({ categoryId, filters }) => {

  const filteredProducts = products.filter((product) => {

    // 1. Main category
    if (product.category !== categoryId) {
      return false;
    }
    // 2. Sub category
    if (
      filters.category !== "all" &&
      product.subCategory !== filters.category
    ) {
      return false;
    }

    // 3. Search
    if (
      filters.search &&
      !product.name
        .toLowerCase()
        .includes(filters.search.toLowerCase())
    ) {
      return false;
    }

    // 4. Price
    if (product.price > filters.maxPrice) {
      return false;
    }

    // 5. Availability
    if (
      filters.availability === "in-stock" &&
      !product.stock
    ) {
      return false;
    }

    // 6. Rating
    if (
      filters.rating !== "all" &&
      product.rating < Number(filters.rating)
    ) {
      return false;
    }

    return true;
  });

  return (
    <div>

      {/* Result count */}
      <div className="mb-5">
        <h1 className="text-2xl font-bold capitalize">
          {categoryId}
        </h1>

        <p className="text-gray-500">
          {filteredProducts.length} products found
        </p>
      </div>

      {filteredProducts.length === 0 ? (

        <div className="bg-white rounded-2xl p-10 text-center">
          <h2 className="text-xl font-semibold">
            No Products Found
          </h2>

          <p className="text-gray-500 mt-2">
            Try changing your filters.
          </p>
        </div>

      ) : (

        <div className="
          grid
          grid-cols-2
          md:grid-cols-3
          xl:grid-cols-4
          gap-5
        ">

          {filteredProducts.map((product) => (

            <div
              key={product.id}
              className="
                bg-white
                rounded-2xl
                border
                overflow-hidden
                hover:shadow-lg
                transition
              "
            >

              <div className="
                h-48
                bg-gray-100
                flex
                items-center
                justify-center
                text-7xl
              ">
                {product.emoji}
              </div>

              <div className="p-4">

                <p className="text-xs text-gray-400 mb-1">
                  {product.subCategory}
                </p>

                <h2 className="font-semibold text-gray-900">
                  {product.name}
                </h2>

                <div className="mt-2 text-sm">
                  ⭐ {product.rating}
                </div>

                <div className="mt-2">
                  <span className="text-lg font-bold">
                    ₹{product.price.toLocaleString()}
                  </span>
                </div>

                <button
                  className="
                    mt-4
                    w-full
                    rounded-xl
                    bg-black
                    py-2.5
                    text-sm
                    font-semibold
                    text-white
                    hover:bg-gray-800
                  "
                >
                  Add to Cart
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default Products;
