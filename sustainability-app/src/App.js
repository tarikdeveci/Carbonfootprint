import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { FaLeaf, FaTint, FaBolt } from "react-icons/fa";
import CarbonCalculator from "./components/CarbonCalculator/CarbonCalculator";
import WaterCalculator from "./components/WaterCalculator/WaterCalculator";
import EnergyEfficiency from "./components/EnergyEfficiency/EnergyEfficiency";
import ResultPage from "./components/ResultPage/Resultpage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-5">
        <nav className="w-full max-w-5xl bg-white p-4 shadow-lg rounded-lg flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-700">Sürdürülebilirlik Hesaplayıcı</h1>
          <div className="flex gap-6">
            <NavLink to="/carbon" className={({ isActive }) => isActive ? "text-blue-800 font-bold" : "text-blue-600 font-semibold hover:text-blue-800 transition"}>
              <FaLeaf className="inline-block mr-2" /> Karbon Ayak İzi
            </NavLink>
            <NavLink to="/water" className={({ isActive }) => isActive ? "text-blue-800 font-bold" : "text-blue-600 font-semibold hover:text-blue-800 transition"}>
              <FaTint className="inline-block mr-2" /> Su Ayak İzi
            </NavLink>
            <NavLink to="/energy" className={({ isActive }) => isActive ? "text-blue-800 font-bold" : "text-blue-600 font-semibold hover:text-blue-800 transition"}>
              <FaBolt className="inline-block mr-2" /> Enerji Verimliliği
            </NavLink>
          </div>
        </nav>
        <div className="w-full max-w-5xl bg-white mt-6 p-6 shadow-md rounded-lg">
          <Routes>
            <Route path="/carbon" element={<CarbonCalculator />} />
            <Route path="/water" element={<WaterCalculator />} />
            <Route path="/energy" element={<EnergyEfficiency />} />
            <Route path="/results" element={<ResultPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;