import React, { useEffect, useState } from "react";
import axios from "axios";
import cloudy from "../assets/cloudy.png";
import { FaThermometerEmpty } from "react-icons/fa";
import { CiCloudOn } from "react-icons/ci";
const HomeComponent = () => {
  const [room, setRoom] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get-room")
      .then((response) => {
        setRoom(response.data.name);
      })
      .catch((err) => {
        console.error("Veri çekme hatası: " + err.message);
      });
  }, []);

  return (
    <div className="bg-orange-100 h-64 rounded-3xl p-5 shadow-sm flex justify-between">
      <div>
        <p className="text-7xl text-orange-700 font-medium">{room} </p>
        <p className="text-xl text-orange-600 ">
          Evine hoşgeldin! Hava kalitesi iyi ve taze. <br /> Bugün dışarıya
          çıkabilirsin
        </p>
        <div className="flex items-center py-3">
          <FaThermometerEmpty size={40} />
          <p className="font-semibold text-2xl">21°C</p>
          <p className="font-medium text-lg pl-3">Dış Ortam Sıcaklığı</p>
        </div>
        <div className="flex items-center">
          <CiCloudOn size={30}/>
          <p className="font-medium text-base">Parçalı Bulutlu</p>
        </div>
      </div>
      <img src={cloudy} alt="cloud" />
    </div>
  );
};

export default HomeComponent;
