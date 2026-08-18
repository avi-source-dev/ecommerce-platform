import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Create Account
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Start shopping with MyShop
        </p>
      </div>

      <form
        onSubmit={handleRegister}
        className="space-y-5"
      >
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Name
          </label>

          <input
            type="text"
            placeholder="John Doe"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Email
          </label>

          <input
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Password
          </label>

          <input
            type="password"
            placeholder="••••••••"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white hover:bg-blue-700"
        >
          Create Account
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-medium text-blue-600 hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;