import {useNavigate} from "react-router-dom"
import {useParams} from "react-router-dom"
import ShopContext from "../contexts/ShopContext";
import { useContext} from "react";


const Products = ({ filters }) => {
  const {products } = useContext(ShopContext);
  const { categoryId, } = useParams();

  const navigate = useNavigate()
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
                  onClick={()=>navigate(`/products/${product.id}`)}

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
