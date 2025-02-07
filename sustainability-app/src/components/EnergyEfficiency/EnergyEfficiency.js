import React, { useState } from "react";
import "./EnergyEfficiency.css";

const EnergyEfficiencyCalculator = () => {
  const [electricityConsumption, setElectricityConsumption] = useState(0);
  const [heatingConsumption, setHeatingConsumption] = useState(0);
  const [coolingConsumption, setCoolingConsumption] = useState(0);
  const [machineryEfficiency, setMachineryEfficiency] = useState(0);
  const [renewableEnergy, setRenewableEnergy] = useState(0);
  const [energySaved, setEnergySaved] = useState(null);

  const calculateEnergyEfficiency = () => {
    const total = 
      (electricityConsumption * 0.8) + 
      (heatingConsumption * 0.9) + 
      (coolingConsumption * 0.7) + 
      (machineryEfficiency * 1.2) - 
      (renewableEnergy * 1.5);
    setEnergySaved(total);
  };

  return (
    <div className="calculator-container">
      <h2 className="title">Enerji Verimliliği Hesaplayıcı</h2>
      <div className="input-container">
        <label>
          Elektrik Tüketimi (kWh/gün):
          <input type="number" value={electricityConsumption} onChange={(e) => setElectricityConsumption(Number(e.target.value))} />
        </label>
        <label>
          Isıtma Tüketimi (kWh/gün):
          <input type="number" value={heatingConsumption} onChange={(e) => setHeatingConsumption(Number(e.target.value))} />
        </label>
        <label>
          Soğutma Tüketimi (kWh/gün):
          <input type="number" value={coolingConsumption} onChange={(e) => setCoolingConsumption(Number(e.target.value))} />
        </label>
        <label>
          Makine Verimliliği (%):
          <input type="number" value={machineryEfficiency} onChange={(e) => setMachineryEfficiency(Number(e.target.value))} />
        </label>
        <label>
          Yenilenebilir Enerji Kullanımı (kWh/gün):
          <input type="number" value={renewableEnergy} onChange={(e) => setRenewableEnergy(Number(e.target.value))} />
        </label>
      </div>
      <button className="calculate-button" onClick={calculateEnergyEfficiency}>Hesapla</button>
      {energySaved !== null && <p className="result">Toplam Enerji Verimliliği Kazancı: {energySaved.toFixed(2)} kWh</p>}
    </div>
  );
};

export default EnergyEfficiencyCalculator;