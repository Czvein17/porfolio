import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import CustomNavLink from "./CustomNavLink";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  const inActive =
    "w-[100px] h-[35px] text-center flex items-center rounded-[18px] gap-2 justify-center transition-all ease-in-out  duration-300 hover:bg-[#151515] hover:text-white hover:font-bold";
  const active = `${inActive} bg-black text-white  font-bold`;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="lg:fixed top-0 left-0 z-10 px-[5%] w-full h-[70px] flex justify-between items-center font-sans shadow-md">
      <h1 className={`${active}`}>It&apos;s Me</h1>

      <nav className="navbar">
        <button
          onClick={toggleMenu}
          className={`flex items-center justify-center h-full relative z-10 transition-all duration-300 ${
            isMenuOpen ? "animate-spin" : "fade-out"
          }  md:hidden`}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <ul className="hidden md:flex gap-10 text-md">
          {navItems.map((item) => (
            <CustomNavLink
              key={item.path}
              to={item.path}
              inActive={inActive}
              active={active}
            >
              {item.label}
            </CustomNavLink>
          ))}
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
              {navItems.map((item) => (
                <CustomNavLink
                  key={item.path}
                  to={item.path}
                  inActive={inActive}
                  active={active}
                >
                  {item.label}
                </CustomNavLink>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
