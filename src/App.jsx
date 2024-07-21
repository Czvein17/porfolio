import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-white flex flex-col justify-center items-center">
      <NavBar />
      <div className="w-full min-h-[95vh] flex justify-center items-center ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
