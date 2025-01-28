import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting credentials:", credentials); // Add this line to debug
  
    try {
      const response = await axios.post("http://localhost:4000/api/login", credentials);
  
      if (response.data.success) {
        navigate("/home"); // Redirect to home page
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again.");
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#161616]">
      <div className="bg-[#242424] text-white rounded-r-2xl rounded-b-2xl rounded-l-2xl p-8 shadow-lg max-w-sm w-full">
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-3xl font-bold">📖 EduPath</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full p-3 bg-[#161616] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full p-3 bg-[#161616] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <div className="flex justify-between items-center mb-6">
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white font-medium py-3 rounded-r-3xl rounded-b-3xl rounded-l-3xl  hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>
        <div className="flex items-center justify-center my-4">
          <span className="text-gray-400">Or login with</span>
        </div>
        <div className="flex justify-center gap-4 mb-4">
          <button className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full">
            <span className="sr-only">Login with Facebook</span>
            <i className="fab fa-facebook-f text-white"></i>
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full">
            <span className="sr-only">Login with Google</span>
            <i className="fab fa-google text-white"></i>
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full">
            <span className="sr-only">Login with Twitter</span>
            <i className="fab fa-twitter text-white"></i>
          </button>
        </div>
        <div className="text-center">
          <a href="#" className="text-gray-400 hover:text-white text-sm">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
