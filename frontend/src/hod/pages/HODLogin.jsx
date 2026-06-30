import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HODLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Backend login will be added later
    alert("HOD Login Successful");

    navigate("/hod-dashboard");
  };

  return (
    <div className="min-h-screen bg-blue-50 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">
          HOD Login
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Head of Department Portal
        </p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border rounded-lg p-3 mb-4"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border rounded-lg p-3 mb-6"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default HODLogin;