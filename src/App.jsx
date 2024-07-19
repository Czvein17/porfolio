import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#FFFFFF] flex flex-col justify-center items-center">
      <NavBar />
      <div className="w-full min-h-screen flex justify-center items-center ">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
