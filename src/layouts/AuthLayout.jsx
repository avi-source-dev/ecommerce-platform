import { Outlet, Link } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link
            to="/"
            className="text-3xl font-bold text-black-600"
          >
            MyShop
          </Link>

01§
          <p className="mt-2 text-sm text-gray-500">
            Welcome to MyShop
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;