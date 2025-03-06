import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [login, setLogin] = useState({
    emailAddress: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault(); // Prevent form submission
    setLoading(true); // Start loading

    try {
      const response = await axios.post("https://movie-review-api.vercel.app/login", {
        username: login.emailAddress,
        password: login.password,
      });
      toast.success("Login successful!");
      localStorage.setItem('id', response.data.id);
      console.log(response.data.id);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("Unauthorized.");
      } else {
        toast.error("An error occurred.");
        console.log(error.message);
      }
    }
    
    setLoading(false); // Stop loading
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-12">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >
          {/* Email Address Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                onChange={(e) => {
                  setLogin((prev) => ({
                    ...prev,
                    emailAddress: e.target.value,
                  }))
                }}
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                onChange={(e) => {
                  setLogin((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }}
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* Sign-in Button */}
          <div>
            <button 
              type="submit"
              disabled={loading} 
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            
          </a>
        </p>
      </div>

      <ToastContainer /> {/* Toast container */}
    </div>
  );
};

export default Login;
