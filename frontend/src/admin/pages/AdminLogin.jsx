import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);
      
      setTimeout(() => {
        // 👇 CHANGE THIS - Use your credentials
        if (formData.email === "sacdiamohamed083@gmail.com" && formData.password === "saadiya93") {
          localStorage.setItem("isAdminLoggedIn", "true");
          localStorage.setItem("adminEmail", formData.email);
          navigate("/admin");
        } else {
          setErrors({ general: "Invalid admin credentials. Please try again." });
        }
        setIsLoading(false);
      }, 1500);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-orange-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Logo and Title */}
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">A</span>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Admin Login
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Access the admin dashboard to manage scholarships and bursaries
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white py-8 px-6 shadow-lg rounded-lg sm:px-10">
          {errors.general && (
            <div className="mb-4 bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              <span className="block sm:inline">{errors.general}</span>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Admin Email Address
              </label>
              <div className="mt-1 relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="off"
                  value={formData.email}
                  onChange={handleChange}
                  className={`appearance-none block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm`}
                  placeholder="admin@edufundkenya.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="off"
                  value={formData.password}
                  onChange={handleChange}
                  className={`appearance-none block w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm`}
                  placeholder="••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                >
                  {showPassword ? (
                    <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-xs text-red-600">{errors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  "Sign In as Admin"
                )}
              </button>
            </div>
          </form>

          {/* Demo Credentials Notice */}
          <div className="mt-4 bg-yellow-50 rounded-md p-3">
            <p className="text-xs text-yellow-800 text-center">
              Demo Admin Credentials: <br />
              Email: sacdiamohamed083@gmail.com <br />
              Password: saadiya93
            </p>
          </div>

          {/* Back to User Login */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Not an admin?{" "}
              <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                User Login
              </Link>
            </p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="text-center">
          <Link to="/" className="text-sm text-gray-600 hover:text-gray-900 mx-2">
            Home
          </Link>
          <span className="text-gray-300">|</span>
          <Link to="/about" className="text-sm text-gray-600 hover:text-gray-900 mx-2">
            About
          </Link>
          <span className="text-gray-300">|</span>
          <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900 mx-2">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;