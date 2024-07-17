import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const inActive =
    "w-[90px] h-[30px] text-center flex items-center justify-center hover:bg-[#151515] hover:text-white hover:rounded-[12px] hover:font-bold";
  const active = `${inActive} w-[90px] text-center bg-black text-white rounded-[12px] font-bold`;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 z-10 px-[5%] w-full h-[70px] flex justify-between items-center  font-sans ">
      <h1 className={active}>It&apos;s Me</h1>

      <nav className="navbar">
        <button
          onClick={toggleMenu}
          className="flex items-center justify-center h-full relative z-10 md:hidden"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <ul className="hidden md:flex gap-10 text-md">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? active : inActive)}
          >
            Home
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? active : inActive)}
          >
            Projects
          </NavLink>

          <NavLink
            to={"/contact"}
            className={({ isActive }) => (isActive ? active : inActive)}
          >
            Contact
          </NavLink>
        </ul>
      </nav>

      {/* Mobile popup menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-5 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white h-[50%] w-[70%] p-10 rounded-lg shadow-lg flex justify-center items-center relative">
            <button onClick={toggleMenu} className="absolute top-4 right-4">
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            <ul className="flex flex-col gap-10 text-md">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? active : inActive)}
                onClick={() => setIsMenuOpen(false)} // Close the menu when a link is clicked
              >
                Home
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? active : inActive)}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? active : inActive)}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
