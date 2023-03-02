import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProfileUpdate from "./pages/ProfileUpdate";
import { AuthProvider } from "./context/auth";
import Navbar from "./components/navbar/navbar";

export default function App() {
  return (
    <div className="bg-color1 h-screen">
      <BrowserRouter>
        <Navbar />
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
