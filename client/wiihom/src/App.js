import Sidebar from "./components/Sidebar";
import Kutubir from "./components/Kutubir";
import "./index.css";
import Kutudort from "./components/kutudort";
import Kutubes from "./components/Kutubes";
import Kutualti from "./components/Kutualti";
import Kutuuc from "./components/Kutuuc";
import Kutuiki from "./components/Kutuiki";
function App() {
  return (
    <div className="h-screen w-screen bg-slate-100 flex p-16 ">
      <Sidebar />
      <div className="w-4/6 pr-10">
        <div className="flex w-full gap-3 pt-10 pl-4">
          <div className="w-full">
            <Kutubir />
          </div>
        </div>
        <div className="flex">
          <div className="w-full">
            <div className="flex w-full gap-3 pt-2 pl-4">
              <div className="w-full">
                <Kutudort />
              </div>
            </div>
            <div className="flex  gap-3 pt-5 pl-4">
              <div className="w-full">
                <Kutubes />
              </div>
            </div>
            <div className="flex w-full gap-3 pt-5 pl-4">
              <div className="w-full flex justify-center ">
                <Kutualti />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/6 h-6-6 pt-10 ">
        <div className="h-2/6 pb-1 ">
          <Kutuiki />
        </div>
        <div className="h-4/6 pt-1 ">
          <Kutuuc />
        </div>
      </div>
    </div>
  );
}

export default App;
