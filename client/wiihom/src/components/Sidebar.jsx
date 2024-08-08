import React, { useState } from "react";
import {
  FaHome,
  FaCubes,
  FaLightbulb,
  FaPlug,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { FiLayout } from "react-icons/fi";
import { LuBlinds } from "react-icons/lu";
import { TbAirConditioning } from "react-icons/tb";
import { PiSecurityCamera } from "react-icons/pi";

const Sidebar = () => {
  const [active, setActive] = useState(1);

  const menuItems = [
    { icon: <FaHome />, id: 1 },
    { icon: <FiLayout />, id: 2 },
    { icon: <FaCubes />, id: 3 },
    { icon: <FaLightbulb />, id: 4 },
    { icon: <LuBlinds />, id: 5 },
    { icon: <FaPlug />, id: 6 },
    { icon: <TbAirConditioning />, id: 7 },
    { icon: <PiSecurityCamera />, id: 8 },
    { icon: <FaCog />, id: 9 },
    { icon: <FaSignOutAlt />, id: 10 },
  ];

  return (
    <div className="relative w-32 h-full rounded-3xl text-center py-5 bg-indigo-500 flex flex-col justify-between items-center">
      <div
        className="absolute bg-white w-12 h-12 rounded-full transition-all duration-300"
        style={{
          top: `${(active - 0.76) * 5.07}rem`,
        }}
      />
      {menuItems.map((item) => (
        <div key={item.id} className="relative z-10 p-2 ">
          <div
            onClick={() => setActive(item.id)}
            className={`w-8 h-8 flex items-center justify-center text-3xl ${
              active === item.id ? "text-indigo-500" : "text-white"
            }`}
          >
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

/*relative z-10 p-2 cursor-pointer 
  w-8 h-8 flex items-center justify-center*/
