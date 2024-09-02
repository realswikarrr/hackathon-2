"use client";

import { useState } from "react";
import { calculateCO2Savings } from "@/utils/calculateCO2Savings";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MetroReward() {
  const [distance, setDistance] = useState(500);
  const [co2Savings, setCo2Savings] = useState(500);

  const handleCalculate = () => {
    const vehicleCO2 = 120; // Example vehicle CO2 per km in gCO2/km
    const metroCO2 = 30; // Example metro CO2 per passenger-km in gCO2/passenger-km

    const savings = calculateCO2Savings(distance, vehicleCO2, metroCO2);
    setCo2Savings(savings);
  };

  return (
    <div className=" mt-10 relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
      <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
        <div className="flex justify-center items-center mx-auto mt-5 flex-col">
          <div>
            <label htmlFor="distance">Distance Traveled (km): </label>
            <Input
              className="mt-5"
              type="number"
              id="distance"
              value={distance}
              onChange={(e) => setDistance(parseFloat(e.target.value))}
            />
          </div>
          <Button className="mt-5" onClick={handleCalculate}>
            Calculate CO2 Savings
          </Button>
          <Button className="mt-5" variant={"outline"}>
            <h2>CO2 Saved: {co2Savings.toFixed(2)} grams</h2>
          </Button>
          <Link href="/RewardPage">
            <Button className="mt-5">Back</Button>
          </Link>
          <p className=" text-[10px] w-60 mt-5 cursor-pointer">
            Note: Your travel info is being tracked when you use this app.
          </p>
        </div>
      </div>
    </div>
  );
}
