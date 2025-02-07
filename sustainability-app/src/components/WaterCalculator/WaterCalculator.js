import React, { useState } from "react";
import "./WaterCalculator.css";

const WaterCalculator = () => {
  const [industrialUse, setIndustrialUse] = useState(0);
  const [coolingUse, setCoolingUse] = useState(0);
  const [cleaningUse, setCleaningUse] = useState(0);
  const [irrigationUse, setIrrigationUse] = useState(0);
  const [rawMaterialWater, setRawMaterialWater] = useState(0);
  const [wastewater, setWastewater] = useState(0);
  const [waterFootprint, setWaterFootprint] = useState(null);

  const calculateWaterFootprint = () => {
    const total = 
      industrialUse * 1.2 + 
      coolingUse * 1.5 + 
      cleaningUse * 0.8 + 
      irrigationUse * 1.8 + 
      rawMaterialWater * 2.5 + 
      wastewater * 0.5;
    setWaterFootprint(total);
  };

  return (
    <div className="calculator-container">
      <h2 className="title">Su Ayak İzi Hesaplayıcı</h2>
      <div className="input-container">
        <label>
          Endüstriyel Kullanım (m³/gün):
          <input type="number" value={industrialUse} onChange={(e) => setIndustrialUse(Number(e.target.value))} />
        </label>
        <label>
          Soğutma Kullanımı (m³/gün):
          <input type="number" value={coolingUse} onChange={(e) => setCoolingUse(Number(e.target.value))} />
        </label>
        <label>
          Temizlik Kullanımı (m³/gün):
          <input type="number" value={cleaningUse} onChange={(e) => setCleaningUse(Number(e.target.value))} />
        </label>
        <label>
          Sulama Kullanımı (m³/gün):
          <input type="number" value={irrigationUse} onChange={(e) => setIrrigationUse(Number(e.target.value))} />
        </label>
        <label>
          Hammadde İçin Su Kullanımı (m³/gün):
          <input type="number" value={rawMaterialWater} onChange={(e) => setRawMaterialWater(Number(e.target.value))} />
        </label>
        <label>
          Atık Su (m³/gün):
          <input type="number" value={wastewater} onChange={(e) => setWastewater(Number(e.target.value))} />
        </label>
      </div>
      <button className="calculate-button" onClick={calculateWaterFootprint}>Hesapla</button>
      {waterFootprint !== null && <p className="result">Toplam Su Ayak İzi: {waterFootprint.toFixed(2)} m³</p>}
    </div>
  );
};

export default WaterCalculator;
