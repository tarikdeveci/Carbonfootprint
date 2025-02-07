import React, { useState } from "react";
import "./CarbonCalculator.css";

const CarbonCalculator = () => {
  const [electricity, setElectricity] = useState(0);
  const [transport, setTransport] = useState(0);
  const [waste, setWaste] = useState(0);
  const [waterUsage, setWaterUsage] = useState(0);
  const [heating, setHeating] = useState(0);
  const [manufacturing, setManufacturing] = useState(0);
  const [rawMaterials, setRawMaterials] = useState(0);
  const [machinery, setMachinery] = useState(0);
  const [carbonFootprint, setCarbonFootprint] = useState(null);

  const calculateCarbon = () => {
    const total = 
      electricity * 0.5 + 
      transport * 2.3 + 
      waste * 1.8 + 
      waterUsage * 0.2 + 
      heating * 1.2 + 
      manufacturing * 3.0 + 
      rawMaterials * 4.5 + 
      machinery * 2.8;
    setCarbonFootprint(total);
  };

  return (
    <div className="calculator-container">
      <h2 className="title">Karbon Ayak İzi Hesaplayıcı</h2>
      <div className="input-container">
        <label>
          Elektrik Tüketimi (kWh):
          <input type="number" value={electricity} onChange={(e) => setElectricity(Number(e.target.value))} />
        </label>
        <label>
          Ulaşım Mesafesi (km):
          <input type="number" value={transport} onChange={(e) => setTransport(Number(e.target.value))} />
        </label>
        <label>
          Atık Miktarı (kg):
          <input type="number" value={waste} onChange={(e) => setWaste(Number(e.target.value))} />
        </label>
        <label>
          Su Kullanımı (litre/gün):
          <input type="number" value={waterUsage} onChange={(e) => setWaterUsage(Number(e.target.value))} />
        </label>
        <label>
          Isıtma Tüketimi (kWh):
          <input type="number" value={heating} onChange={(e) => setHeating(Number(e.target.value))} />
        </label>
        <label>
          Üretim Faaliyetleri (kg CO2):
          <input type="number" value={manufacturing} onChange={(e) => setManufacturing(Number(e.target.value))} />
        </label>
        <label>
          Hammadde Kullanımı (kg CO2):
          <input type="number" value={rawMaterials} onChange={(e) => setRawMaterials(Number(e.target.value))} />
        </label>
        <label>
          Makine Kullanımı (kg CO2):
          <input type="number" value={machinery} onChange={(e) => setMachinery(Number(e.target.value))} />
        </label>
      </div>
      <button className="calculate-button" onClick={calculateCarbon}>Hesapla</button>
      {carbonFootprint !== null && <p className="result">Toplam Karbon Ayak İzi: {carbonFootprint.toFixed(2)} kg CO2</p>}
    </div>
  );
};

export default CarbonCalculator;
