// utils/calculateCO2Savings.js

export function calculateCO2Savings(distance, vehicleCO2PerKm, metroCO2PerKm) {
    const vehicleEmissions = distance * vehicleCO2PerKm;
    const metroEmissions = distance * metroCO2PerKm;
    return vehicleEmissions - metroEmissions;
  }
  