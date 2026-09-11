import {useNavigate} from "react-router-dom"
import ShopContext from "../contexts/ShopContext";
import { useContext } from "react";


const Category = () => {
  const {categories} = useContext(ShopContext);
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-#e5e7eb">
      <div className="max-w-7xl mx-auto px-5 py-12">

        {/* Page Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900">
            Shop by Category
          </h1>

          <p className="mt-3 text-gray-500">
            Explore our wide range of products
          </p>
        </div>

        {/* Category Sections */}
        <div className="space-y-14">

          {categories.map((category) => (
            <section key={category.name}>

              {/* Section Header */}
              <div className="flex items-center justify-between mb-7">

                <h2 className="text-2xl font-bold text-gray-900">
                  {category.name}
                </h2>

                <button className="text-sm font-semibold text-gray-600 hover:text-black transition"
                onClick={()=>navigate(`/category/${category.name}`)}>
                  View All →
                </button>

              </div>

              {/* Sub Categories */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">

                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="group flex flex-col items-center cursor-pointer"
                  >

                    {/* Emoji Circle */}
                    <div
                      className="
                        w-28 h-28
                        md:w-32 md:h-32
                        rounded-full
                        bg-gray-100
                        flex
                        items-center
                        justify-center
                        text-5xl
                        md:text-6xl
                        shadow-sm
                        group-hover:shadow-lg
                        group-hover:bg-gray-200
                        group-hover:scale-105
                        transition-all
                        duration-300
                      "
                    >
                      {item.emoji}
                    </div>

                    {/* Name */}
                    <h3
                      className="
                        mt-4
                        text-base
                        font-semibold
                        text-gray-800
                        group-hover:text-black
                      "
                    >
                      {item.name}
                    </h3>

                  </div>
                ))}

              </div>

            </section>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Category;