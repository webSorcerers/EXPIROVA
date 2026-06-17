import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import { HomePage } from "./pages/HomePage";
import { AiscanPage } from "./pages/AiscanPage";
import { SmartinventoryPage } from "./pages/SmartinventoryPage";
import { AlertPage } from "./pages/AlertPage";
import { ProfilePage } from "./pages/ProfilePage";

function App() {
  return (
    <Routes>
      {/* 1. When the app loads at "/", automatically send them to "/dashboard" */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* Your Page Routes */}
      <Route path="/dashboard" element={<HomePage />} />
      <Route path="/aiscan" element={<AiscanPage />} />
      <Route path="/smartinventory" element={<SmartinventoryPage />} />
      <Route path="/alerts" element={<AlertPage />} />
      <Route path="/profile" element={<ProfilePage />} />

      {/* 2. Catch-all: If a user types a broken URL, safely send them back to /dashboard */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default App;