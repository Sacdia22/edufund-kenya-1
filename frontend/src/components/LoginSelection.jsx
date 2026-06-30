import React from "react";
import { Link } from "react-router-dom";

const LoginSelection = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">
          EduFund Kenya
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Select your account type
        </p>

        <div className="space-y-4">

          <Link
            to="/student-login"
            className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700"
          >
            👨‍🎓 Student Login
          </Link>

          <Link
            to="/hod-login"
            className="block w-full bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700"
          >
            👨‍🏫 HOD Login
          </Link>

          <Link
            to="/chief-login"
            className="block w-full bg-yellow-600 text-white text-center py-3 rounded-lg hover:bg-yellow-700"
          >
            👨‍💼 Chief Login
          </Link>

          <Link
            to="/admin-login"
            className="block w-full bg-red-600 text-white text-center py-3 rounded-lg hover:bg-red-700"
          >
            👨‍💻 Admin Login
          </Link>

        </div>

      </div>
    </div>
  );
};

export default LoginSelection;