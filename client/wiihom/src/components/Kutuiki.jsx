import React, { useEffect, useState } from "react";
import axios from "axios";

const Kutuiki = () => {
  const [senaryolar, setSenaryolar] = useState([]);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get-scenario")
      .then((response) => {
        setSenaryolar(response.data.scenario);
      })
      .catch((err) => {
        setError("Veri çekme hatası: " + err.message);
      });
  }, []);

  const handleUpdate = (id, durum) => {
    axios
      .post("http://localhost:3001/update-scenario", { id, durum })
      .then(() => {
        setSenaryolar((prevSenaryolar) =>
          prevSenaryolar.map((item) =>
            item.id === id ? { ...item, durum } : item
          )
        );
        setSelectedId(null);
      })
      .catch((err) => {
        setError("Veri güncelleme hatası: " + err.message);
      });
  };

  const handleClick = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  const colors = [
    "bg-violet-600/70",
    "bg-red-500/60",
    "bg-blue-400/60",
    "bg-yellow-400/60",
  ];

  return (
    <div className="p-3 bg-slate-200/40 rounded-2xl h-full">
      <div className="flex w-full justify-between h-1/6 text-2xl px-3">
        <p>Senaryolar</p> <p>{">"}</p>
      </div>
      <div className="h-5/6 overflow-y-auto">
        {error && <p className="text-red-600">{error}</p>}
        <div className="grid grid-cols-2 gap-3">
          {senaryolar.map((item, index) => (
            <div
              key={item.id}
              className={`text-center pt-1 w-full h-20 rounded-xl items-center justify-center text-xl cursor-pointer relative ${colors[index]}`}
              onClick={() => handleClick(item.id)}
            >
              <p>{item.scenario}</p>
              {selectedId === item.id && (
                <div>
                  <button
                    onClick={() => handleUpdate(item.id, true)}
                    className="px-2 mt-2 bg-teal-500 text-white rounded"
                  >
                    Evet
                  </button>
                  <button
                    onClick={() => handleUpdate(item.id, false)}
                    className="px-2  bg-red-400 text-white rounded"
                  >
                    Hayır
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kutuiki;
