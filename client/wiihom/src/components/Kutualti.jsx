import React from "react";
import { VscKey } from "react-icons/vsc";
import { FaRegBell } from "react-icons/fa";
import { TbDeviceRemote } from "react-icons/tb";
import { GrUserPolice } from "react-icons/gr";
import { GiHomeGarage, GiDoorHandle, GiOpenGate } from "react-icons/gi";

const Kutualti = () => {
  return (
    <div className="flex justify-between items-center text-center bg-slate-200/40 h-16 w-4/6 rounded-lg p-8 shadow-sm">
      <div className="bg-yellow-300/60 rounded-full h-14 w-14 items-center flex justify-center">
        <VscKey className="text-white size-8" />
      </div>
      <div className="bg-pink-500/60 rounded-full h-14 w-14 items-center flex justify-center">
        <FaRegBell className="text-white size-8" />
      </div>
      <div className="bg-violet-700/50 rounded-full h-14 w-14 items-center flex justify-center">
        <TbDeviceRemote className="text-white size-8" />
      </div>
      <div className="bg-sky-500/50 rounded-full h-14 w-14 items-center flex justify-center">
        <GrUserPolice className="text-white size-8" />
      </div>
      <div className="bg-violet-700/50 rounded-full h-14 w-14 items-center flex justify-center">
        <GiOpenGate className="text-white size-8" />
      </div>
      <div className="bg-pink-500/60 rounded-full h-14 w-14 items-center flex justify-center">
        <GiHomeGarage className="text-white size-8" />
      </div>
      <div className="bg-yellow-300 rounded-full h-14 w-14 items-center flex justify-center">
        <GiDoorHandle className="text-white size-8" />
      </div>
    </div>
  );
};

export default Kutualti;
