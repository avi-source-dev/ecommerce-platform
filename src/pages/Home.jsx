import { Link } from "react-router-dom";
import Category from "./Category"


const Home = () => {
  return (
        <div>

    <section className="flex min-h-[70vh] items-center">
      <div className="max-w-3xl">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
          Welcome to MyShop
        </span>

        <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-900">
          Find products you
          <span className="text-blue-600"> love.</span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Discover quality products at great prices.
          Shop easily and securely with MyShop.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            to="/category"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Explore
          </Link>

          <Link
            to="/register"
            className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
          >
            Create Account
          </Link>
        </div>
        
      </div>
    </section>

      <Category/>
    </div>
  );
};

export default Home;