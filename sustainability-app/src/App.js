import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CarbonCalculator from "./components/CarbonCalculator/CarbonCalculator";
import WaterCalculator from "./components/WaterCalculator/WaterCalculator";
import EnergyEfficiency from "./components/EnergyEfficiency/EnergyEfficiency";
import ResultPage from "./components/ResultPage/Resultpage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-5">
        <nav className="flex gap-4 mb-5 bg-white p-3 shadow-md rounded-lg">
          <Link to="/carbon" className="text-blue-500 hover:underline">Karbon Ayak İzi</Link>
          <Link to="/water" className="text-blue-500 hover:underline">Su Ayak İzi</Link>
          <Link to="/energy" className="text-blue-500 hover:underline">Enerji Verimliliği</Link>
        </nav>
        <Routes>
          <Route path="/carbon" element={<CarbonCalculator />} />
          <Route path="/water" element={<WaterCalculator />} />
          <Route path="/energy" element={<EnergyEfficiency />} />
          <Route path="/results" element={<ResultPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
