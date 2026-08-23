import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const product = [
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
    size:['S','M','L','XL','XXL'],
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
    size:['S','M','L','XL','XXL'],
    emoji: "👖",
    stock: true,
  },
  {
    id: 9,
    name: "Women's Dress",
    category: "fashion",
    subCategory: "Women",
    price: 1499,
  size:['S','M','L','XL','XXL'],
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
    size:['S','M','L','XL','XXL'],
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

function ProductDetails({addCarditem}) {
 const navigate = useNavigate(); 
  const { id } = useParams();

  const selectedProduct = product.find(
    (item) => item.id === Number(id)
  );

  if (!selectedProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">
          Product Not Found
        </h1>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Product Image */}
        <div className="flex items-center justify-center bg-gray-100 min-h-[350px]">
          <span className="text-[180px] drop-shadow-lg">
            {selectedProduct.emoji}
          </span>
        </div>

        {/* Product Info */}
        <div className="p-8 md:p-10 flex flex-col justify-center">

          {/* Category */}
          <p className="text-sm font-medium uppercase tracking-wide text-green-600 mb-3">
            {selectedProduct.category} / {selectedProduct.subCategory}
          </p>

          {/* Product Name */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {selectedProduct.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-5">
            <span className="text-yellow-500 text-lg">
              ⭐
            </span>

            <span className="font-semibold text-gray-700">
              {selectedProduct.rating}
            </span>

            <span className="text-gray-400">
              / 5
            </span>
          </div>
           
           {/* size of products */}
          {
            selectedProduct.size && (
              <div>
                <h1>product size</h1>
                {
                  selectedProduct.size.map((item)=> <button className='m-2 bg-amber-300'>{item}</button>)
                }
              </div>
            )
          }

           
          {/* Price */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ₹{selectedProduct.price}
          </h2>

          {/* Stock */}
          <p
            className={`inline-flex w-fit px-3 py-1 rounded-full text-sm font-semibold mb-6 ${
              selectedProduct.stock
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {selectedProduct.stock
              ? "✓ In Stock"
              : "✕ Out of Stock"}
          </p>
      <div className="flex items-center">

         <div className="m-6">
              {/* Add To Cart */}
          {selectedProduct.stock && (
            <button className="w-full md:w-fit px-8 py-3 bg-green-600 hover:bg-green-700 active:scale-95 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg ml-4"
            onClick={() => navigate("/cart")}
            >
               Buy Now
            </button>
          )}

         </div>
     
         
           {/* Buy now button */}
           <div className="mr-5">
            {selectedProduct.stock && (
            <button className="w-full md:w-fit px-8 py-3 bg-green-600 hover:bg-green-700 active:scale-95 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
            onClick={()=>addCarditem(selectedProduct)}
            >
              🛒 Add to Cart
            </button>
          )} 
           </div>
      </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails




