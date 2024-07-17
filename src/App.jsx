import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#FFFFFF] flex flex-col justify-center items-center">
      <NavBar />
      <div className="h-screen w-ful flex justify-center items-center ">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
