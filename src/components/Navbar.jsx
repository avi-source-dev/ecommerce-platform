import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { LuLogIn } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
  const linkStyle = ({ isActive }) =>
    `px-4 py-2 rounded-lg text-md font-medium transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
    }`;

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center px-4 py-4">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-black-600"
        >
          MyShop
        </NavLink>

        {/* Search - Center */}
        <div className="mx-auto w-full max-w-md px-4">
          <div className="relative">
            <IoSearch className="absolute left-7 top-1/2 -translate-y-1/2 text-xl text-gray-500" />

            <input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg border-2 border-gray-300 bg-white py-2.5 pl-12 pr-4 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Right Navigation */}
        <nav className="flex items-center gap-2">

            <NavLink to="/cart" className={linkStyle}>
            <div className="flex items-center gap-2">
              <span>Wishlist</span>
              <FaHeart />
            </div>
          </NavLink>


          <NavLink to="/cart" className={linkStyle}>
            <div className="flex items-center gap-2">
              <span>Cart</span>
              <FaCartShopping />
            </div>
          </NavLink>

          <NavLink to="/login" className={linkStyle}>
            <div className="flex items-center gap-2">
              <span>Login</span>
              <LuLogIn />
            </div>
          </NavLink>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;