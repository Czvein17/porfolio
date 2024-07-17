import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#F6F5F2] flex flex-col justify-center items-center">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
