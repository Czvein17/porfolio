import { NavLink } from "react-router-dom";

const NavBar = () => {
  const active = "border-b border-b-black font-bold";

  return (
    <header className="fixed  top-0 left-0 z-10 w-full flex justify-between items-center p-5 font-sans bg-[#D6D6D6]">
      <h1>It&apos;s Me</h1>

      <nav>
        <ul className="flex gap-10 text-md">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "border-b border-b-black font-bold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>About</li>
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) => (isActive ? active : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
