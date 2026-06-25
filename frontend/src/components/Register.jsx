import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:5000/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullname: formData.fullName,
            email: formData.email,
            password: formData.password,
            role: "student",
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(data.message);

        localStorage.setItem(
          "user",
          JSON.stringify({
            fullname: formData.fullName,
            email: formData.email,
            role: "student",
          })
        );

        navigate("/login");
      } else {
        setErrors({
          general: data.message || "Registration failed",
        });
      }
    } catch (error) {
      setErrors({
        general: "Could not connect to backend server",
      });
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6">
          Student Registration
        </h2>

        {errors.general && (
          <p className="text-red-500 mb-4">
            {errors.general}
          </p>
        )}

        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <label className="block mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />

            {errors.fullName && (
              <p className="text-red-500 text-sm">
                {errors.fullName}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />

            {errors.email && (
              <p className="text-red-500 text-sm">
                {errors.email}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />

            {errors.password && (
              <p className="text-red-500 text-sm">
                {errors.password}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="block mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />

            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            {isLoading
              ? "Registering..."
              : "Register"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default Register;