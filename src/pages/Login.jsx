import { useState } from "react";
import {Link} from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Login to your account
        </p>
      </div>

      <form
        onSubmit={handleLogin}
        className="space-y-5"
      >
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white hover:bg-blue-700"
        >
          Login
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-medium text-blue-600 hover:underline"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;