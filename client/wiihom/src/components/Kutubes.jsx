import React, { useState } from "react";
import sicaklik from "../assets/sicaklik.png";
import hareket from "../assets/hareket.png";
import taskin from "../assets/taskin.webp";
import axios from "axios";
const Kutudört = () => {
  const [selectedSensor, setSelectedSensor] = useState(false);

  const onClickHandler = (sensorName) => {
    setSelectedSensor(sensorName);
    console.log(sensorName);

    axios
      .post("http://localhost:3001/update-sensor", {
        selectedsensor: sensorName,
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  return (
    <div className=" flex justify-between border h-44 rounded-3xl p-5 shadow-sm">
      <div
        onClick={() => onClickHandler("Sıcaklık")}
        className={`flex justify-between items-center w-80 h-32 border px-10 border-gray-200 ${
          selectedSensor === "Sıcaklık" ? "border-red-500" : ""
        } rounded-3xl shadow-xl`}
      >
        <img src={sicaklik} alt="sıcaklık sensörü" width={100} height={100} />
        <div className="text-center space-y-4 text-lg font-semibold text-gray-400">
          <p>Sıcaklık</p>
          <p>Yatak Odası</p>
        </div>
      </div>
      <div
        onClick={() => onClickHandler("Taşkın")}
        className={`flex justify-between items-center w-80 h-32 border px-10 border-gray-200 ${
          selectedSensor === "Taşkın" ? "border-red-500" : ""
        } rounded-3xl shadow-xl`}
      >
        <img src={taskin} alt="taşkın sensörü" width={100} height={100} />
        <div className="text-center space-y-4 text-lg font-semibold text-gray-400">
          <p>Taşkın</p>
          <p>Bodrum</p>
        </div>
      </div>
      <div
        onClick={() => onClickHandler("Hareket")}
        className={`flex justify-between items-center w-80 h-32 border px-10 border-gray-200 ${
          selectedSensor === "Hareket" ? "border-red-500" : ""
        } rounded-3xl shadow-xl`}
      >
        <img src={hareket} alt="hareket sensörü" width={100} height={100} />
        <div className="text-center space-y-4 text-lg font-semibold text-gray-400">
          <p>Hareket</p>
          <p>Koridor</p>
        </div>
      </div>
    </div>
  );
};

export default Kutudört;
