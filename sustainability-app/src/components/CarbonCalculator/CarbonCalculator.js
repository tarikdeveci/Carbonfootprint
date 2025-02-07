// CarbonCalculating.js

// Elektrik kaynaklı karbon emisyonu hesaplama
function calculateElectricityEmissions(kWh, emissionFactor) {
    const g_to_kg = 0.001; // 1g = 0.001 kg
    const kg_to_ton = 0.001; // 1kg = 0.001 ton
    
    let emissionKg = kWh * emissionFactor * g_to_kg;
    let emissionTon = emissionKg * kg_to_ton;
    
    return {
        emissionKg,
        emissionTon
    };
}

// Yakıt kaynaklı karbon emisyonu hesaplama
function calculateFuelEmissions(fuelAmount, emissionFactor) {
    return fuelAmount * emissionFactor;
}

// Üretim süreci kaynaklı karbon emisyonu hesaplama
function calculateProcessEmissions(productionAmount, processFactor) {
    return productionAmount * processFactor;
}

// Toplam karbon ayak izi hesaplama
function getTotalEmissions(electricity, fuel, process) {
    return electricity + fuel + process;
}

// Örnek kullanım
let electricityEmissions = calculateElectricityEmissions(345884.04, 472);
let fuelEmissions = calculateFuelEmissions(1000, 2.5); // Örnek yakıt tüketimi ve faktör
let processEmissions = calculateProcessEmissions(500, 1.2); // Örnek üretim verisi ve faktör

let totalEmissions = getTotalEmissions(electricityEmissions.emissionTon, fuelEmissions, processEmissions);

console.log("Toplam Karbon Ayak İzi:", totalEmissions, "ton CO2");
