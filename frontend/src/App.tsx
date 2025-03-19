import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Assets from "./pages/Assets";
import DepreciationSchedule from "./pages/DepreciationSchedule";
import JournalEntries from "./pages/JournalEntries";
import Settings from "./pages/Settings";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/assets" element={<Assets />} />
        <Route
          path="/depreciation-schedule"
          element={<DepreciationSchedule />}
        />
        <Route path="/journal-entries" element={<JournalEntries />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;
