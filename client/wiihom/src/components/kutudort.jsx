import React, { useEffect, useState } from "react";
import Switch from "react-switch";
import axios from "axios";
import { FaShieldAlt } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { BsLightning } from "react-icons/bs";
import { LuBlinds } from "react-icons/lu";

const Kutuüç = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get-electricbool")
      .then((response) => {
        setIsOpen(response.data.isOpen);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSwitchChange = (nextChecked) => {
    setIsOpen(nextChecked);
    axios
      .post("http://localhost:3001/update-electricbool", {
        isOpen: nextChecked,
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className=" flex justify-between items-center border h-44 rounded-3xl px-3 shadow-sm">
      <div className="w-40 h-40 bg-yellow-500/40 rounded-3xl p-5 py-10 shadow-xl">
        <div className="flex flex-col justify-center items-center ">
          <FaShieldAlt className="text-white" size={70} />
        </div>
        <p className="pt-4 text-white text-md font-semibold">Alarm</p>
      </div>
      <div className="w-40 h-40 bg-sky-400/50 rounded-3xl p-5 py-10 shadow-xl">
        <div className="flex flex-col justify-center items-center ">
          <IoPhonePortraitOutline className="text-white" size={70} />
        </div>
        <p className="pt-4 text-white text-md font-semibold">İnterkom</p>
      </div>
      <div className="w-40 h-40 bg-red-400/60 rounded-3xl p-5 py-10 shadow-xl">
        <div className="flex flex-col justify-center items-center ">
          <LuBlinds className="text-white" size={70} />
        </div>
        <p className="pt-4 text-white text-md font-semibold">Panjurlar</p>
      </div>
      <div className="w-40 h-40 bg-violet-700/70 rounded-3xl shadow-xl">
        <div className="h-full flex flex-col  p-5 py-7">
          <div className="flex h-1/3 flex-row justify-between">
            <p className="mr-2 text-white font-medium tracking-wide">
              {isOpen ? "Aktif" : "Pasif"}
            </p>
            <Switch
              checked={isOpen}
              onChange={handleSwitchChange}
              onColor="#ffffff"
              offColor="#ffffff"
              offHandleColor="#9643fa"
              onHandleColor="#9643fa"
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              height={20}
              width={48}
            />
          </div>
          <div className="items-center h-2/3">
            <BsLightning className="pt-1 h-1/2 text-white" size={50} />

            <p className="pt-4 text-white text-md font-semibold h-1/2">
              Genel Elektrik
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kutuüç;
