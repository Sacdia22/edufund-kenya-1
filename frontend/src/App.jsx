import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Scholarships from "./components/Scholarships";
import Bursaries from "./components/Bursaries";
import About from "./components/About";
import Apply from "./components/Apply";
import Login from "./components/Login";
import Register from "./components/Register";
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
import UserDashboard from "./users/layout/UserDashboard";
import Profile from "./users/pages/Profile";
import MyApplications from "./users/pages/MyApplications";
import SavedScholarships from "./users/pages/SavedScholarships";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes with Navbar */}
        <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path="/scholarships" element={<><Navbar /><Scholarships /></>} />
        <Route path="/bursaries" element={<><Navbar /><Bursaries /></>} />
        <Route path="/about" element={<><Navbar /><About /></>} />
        <Route path="/apply" element={<><Navbar /><Apply /></>} />
        <Route path="/login" element={<><Navbar /><Login /></>} />
        <Route path="/register" element={<><Navbar /><Register /></>} />
        
        {/* User Routes with Navbar */}
        <Route path="/dashboard" element={<><Navbar /><UserDashboard /></>} />
        <Route path="/profile" element={<><Navbar /><Profile /></>} />
        <Route path="/my-applications" element={<><Navbar /><MyApplications /></>} />
        <Route path="/saved" element={<><Navbar /><SavedScholarships /></>} />
        
        {/* Admin Routes - WITHOUT Navbar */}
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
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;