import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import DashboardPage from "./page/dashboard";
import LoginPage from "./page/login";
import RegisterPage from "./page/register";
import AttendancePage from "./page/attendance";
import AnalyticsPage from "./page/Analytics";
import ContactEmployeePage from "./page/ContactEmployee";
import FaceRecognitionPage from "./page/FaceRecognition";
import "./App.css";

const App = () => {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden);
  };
  return (
    <>
      <Sidebar isSidebarHidden={isSidebarHidden} />
      <section
        id={
          location.pathname.includes("/login") ||
          location.pathname.includes("/register")
            ? "content-auth"
            : "content"
        }
      >
        <Navbar toggleSidebar={toggleSidebar} />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/face-recognition" element={<FaceRecognitionPage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/contact" element={<ContactEmployeePage />} />
        </Routes>
      </section>
    </>
  );
};

export default App;
