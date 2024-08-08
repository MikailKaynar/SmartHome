import React, { useEffect, useState } from "react";
import CircularSlider from "@fseehawer/react-circular-slider";
import Switch from "react-switch";
import axios from "axios";

const Kutuuc = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCold, setIsCold] = useState(false);
  const [sicaklik, setSicaklik] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get-heat")
      .then((response) => {
        console.log(response.data.heat);
      })
      .catch((err) => {});
  }, []);

  const onChangeHandler = (heat) => {
    setSicaklik(heat);

    axios
      .post("http://localhost:3001/update-heat", {
        heat: heat,
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  const openHandler = () => {
    setIsOpen(!isOpen);
  };

  const coldHandler = () => {
    setIsCold(!isCold);
  };

  const plusHandler = () => {
    setSicaklik(sicaklik + 0.5);
  };

  const minusHandler = () => {
    setSicaklik(sicaklik - 0.5);
  };

  return (
    <div className="p-10 shadow-md rounded-2xl">
      <div className="flex justify-between pb-7">
        <div className="flex justify-between bg-slate-200 rounded-lg p-1 px-5 w-40 ">
          <p className="font-medium">Yatak Odası</p>
          <p className="font-medium text-slate-400">V</p>
        </div>
        <div className="">
          <Switch
            className="pr-10"
            checked={isCold}
            onChange={coldHandler}
            onColor="#db1414"
            offColor="#25afff"
            offHandleColor="#257fff"
            onHandleColor="#690707"
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            checkedIcon={false}
            uncheckedIcon={false}
            height={20}
            width={48}
          />
          <Switch
            checked={isOpen}
            onChange={openHandler}
            onColor="#B5C0D0"
            offColor="#B5C0D0"
            offHandleColor="#9643fa"
            onHandleColor="#9643fa"
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            checkedIcon={false}
            uncheckedIcon={false}
            height={20}
            width={48}
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <CircularSlider    // + ve - butonlarını bu CircularSlider ile düzgün çalıştıramadım aslında çalışıyordu ama progress bar takıldığı hareket etmediği için sildim
          onChange={onChangeHandler}
          label="Sıcaklık"
          labelColor="#005a58"
          knobColor="#005a58"
          progressColorFrom="#7d12ff"
          progressColorTo="#f000ff"
          progressSize={30}
          trackColor="#eeeeee"
          trackSize={30}
          data={[
            20, 20.5, 21, 21.5, 22, 22.5, 23, 23.5, 24, 24.5, 25, 25.5, 26,
            26.5, 27, 27.5, 28, 28.5, 29, 29.5, 30,
          ]}
          dataIndex={10}
        />
      </div>
      <div className="flex justify-between mx-10">
        <button
          onClick={minusHandler}
          className="w-20 h-20 bg-blue-400 flex items-center justify-center rounded-xl shadow-lg shadow-blue-400 font-bold text-3xl"
        >
          -
        </button>
        <p className="flex items-center justify-center">{sicaklik}</p>
        <button
          onClick={plusHandler}
          className="w-20 h-20 bg-red-400 flex items-center justify-center rounded-xl shadow-lg shadow-red-400 font-bold text-3xl"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Kutuuc;
