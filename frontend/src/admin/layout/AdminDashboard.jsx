import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    localStorage.removeItem("adminEmail");
    navigate("/admin-login");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Sidebar navigation items
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "users", label: "Users", icon: "👥" },
    { id: "scholarships", label: "Scholarships", icon: "🎓" },
    { id: "bursaries", label: "Bursaries", icon: "💰" },
    { id: "applications", label: "Applications", icon: "📋" },
    { id: "counties", label: "Counties", icon: "🏛️" },
    { id: "webinars", label: "Webinars", icon: "🎥" },
    { id: "settings", label: "Settings", icon: "⚙️" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Overlay for Mobile */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:relative inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">EduFund</span>
            <span className="text-sm text-gray-500">Admin</span>
          </div>
          {isMobile && (
            <button
              onClick={toggleSidebar}
              className="p-1 rounded hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Admin Profile */}
        <div className="p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              A
            </div>
            <div>
              <p className="font-semibold text-gray-800">Admin User</p>
              <p className="text-xs text-gray-500">admin@edufundkenya.com</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 overflow-y-auto h-[calc(100vh-180px)]">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === item.id
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                  {activeTab === item.id && (
                    <span className="ml-auto w-1.5 h-6 bg-white rounded-full"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Logout Button */}
          <div className="mt-4 pt-4 border-t">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
            >
              <span className="text-xl">🚪</span>
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="bg-white shadow-sm z-30">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              {/* Sidebar Toggle Button */}
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors md:hidden"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              <h1 className="text-xl font-bold text-gray-800">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              </h1>
            </div>

            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent outline-none ml-2 text-sm w-40"
                />
              </div>

              {/* Notifications */}
              <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* User Avatar */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  A
                </div>
                <span className="hidden md:inline text-sm font-medium text-gray-700">
                  Admin
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {/* Dashboard Overview - Empty */}
          {activeTab === "dashboard" && (
            <div className="flex flex-col items-center justify-center h-full min-h-[400px]">
              <div className="text-center">
                <div className="text-8xl mb-6">📊</div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome to Admin Dashboard</h2>
                <p className="text-gray-600 mb-4">Select a section from the sidebar to manage your content</p>
                <div className="flex flex-wrap justify-center gap-3 mt-4">
                  <button
                    onClick={() => setActiveTab("users")}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    👥 Manage Users
                  </button>
                  <button
                    onClick={() => setActiveTab("scholarships")}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                  >
                    🎓 Manage Scholarships
                  </button>
                  <button
                    onClick={() => setActiveTab("bursaries")}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                  >
                    💰 Manage Bursaries
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Other sections - Placeholder content */}
          {activeTab !== "dashboard" && (
            <div className="flex flex-col items-center justify-center h-full min-h-[400px]">
              <div className="text-center">
                <div className="text-6xl mb-4">
                  {navItems.find(item => item.id === activeTab)?.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                </h2>
                <p className="text-gray-600">
                  This section is under development. Content will be available soon.
                </p>
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg max-w-md mx-auto">
                  <p className="text-sm text-yellow-800">
                    ⚡ Admin functionality for managing {activeTab} will be implemented here.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Footer */}
          <footer className="bg-white rounded-lg shadow p-4 mt-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
              <p>
                &copy; {new Date().getFullYear()} EduFund Kenya. All rights reserved.
              </p>
              <div className="flex gap-4 mt-2 md:mt-0">
                <Link to="/" className="hover:text-blue-600 transition">Home</Link>
                <Link to="/about" className="hover:text-blue-600 transition">About</Link>
                <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
                <Link to="/privacy" className="hover:text-blue-600 transition">Privacy Policy</Link>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;