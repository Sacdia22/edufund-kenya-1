import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Public Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Scholarships from "./components/Scholarships";
import Bursaries from "./components/Bursaries";
import About from "./components/About";
import Apply from "./components/Apply";
import Login from "./components/Login";
import Register from "./components/Register";
import LoginSelection from "./components/LoginSelection";

// Admin
import AdminDashboard from "./admin/layout/AdminDashboard";
import AdminLogin from "./admin/pages/AdminLogin";
import Dashboard from "./admin/pages/Dashboard";
import Users from "./admin/pages/Users";
import AdminScholarships from "./admin/pages/Scholarships";
import AdminBursaries from "./admin/pages/Bursaries";
import Applications from "./admin/pages/Applications";
import Counties from "./admin/pages/Counties";
import Webinars from "./admin/pages/Webinars";
import Settings from "./admin/pages/Settings";

// Student
import UserDashboard from "./users/layout/UserDashboard";
import Profile from "./users/pages/Profile";
import MyApplications from "./users/pages/MyApplications";
import SavedScholarships from "./users/pages/SavedScholarships";

// HOD (Create these pages next)
import HODLogin from "./hod/pages/HODLogin";

// Chief (Create these pages next)
import ChiefLogin from "./chief/pages/ChiefLogin";
import HODDashboard from "./hod/pages/HODDashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= PUBLIC ================= */}

        <Route path="/" element={<><Navbar /><Home /></>} />

        <Route
          path="/scholarships"
          element={<><Navbar /><Scholarships /></>}
        />

        <Route
          path="/bursaries"
          element={<><Navbar /><Bursaries /></>}
        />

        <Route
          path="/about"
          element={<><Navbar /><About /></>}
        />

        <Route
          path="/apply"
          element={<><Navbar /><Apply /></>}
        />

        {/* Login Selection */}
        <Route path="/login" element={<LoginSelection />} />

        {/* Student Login */}
        <Route
          path="/student-login"
          element={<><Navbar /><Login /></>}
        />

        {/* Register */}
        <Route
          path="/register"
          element={<><Navbar /><Register /></>}
        />

        {/* HOD Login */}
        <Route path="/hod-login" element={<HODLogin />} />

        {/* Chief Login */}
        <Route path="/chief-login" element={<ChiefLogin />} />

        {/* Admin Login */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* ================= STUDENT ================= */}

        <Route
          path="/dashboard"
          element={<><Navbar /><UserDashboard /></>}
        />

        <Route
          path="/profile"
          element={<><Navbar /><Profile /></>}
        />

        <Route
          path="/my-applications"
          element={<><Navbar /><MyApplications /></>}
        />

        <Route
          path="/saved"
          element={<><Navbar /><SavedScholarships /></>}
        />

        {/* ================= ADMIN ================= */}

        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="scholarships" element={<AdminScholarships />} />
          <Route path="bursaries" element={<AdminBursaries />} />
          <Route path="applications" element={<Applications />} />
          <Route path="counties" element={<Counties />} />
          <Route path="webinars" element={<Webinars />} />
          <Route path="settings" element={<Settings />} />
          
        </Route>
<Route path="/hod-dashboard" element={<HODDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;