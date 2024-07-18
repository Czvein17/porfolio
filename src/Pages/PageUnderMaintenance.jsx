import { Link } from "react-router-dom";

export const PageUnderMaintenance = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <img
        src="https://www.svgrepo.com/show/426192/cogs-settings.svg"
        alt="Logo"
        className="mb-8 h-40"
      />
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
        Page under construction
      </h1>
      <p className="text-center text-lg md:text-xl lg:text-2xl mb-8">
        I am working on it. Stay tuned!
      </p>
      <div className="flex space-x-4">
        <Link
          to="#"
          className="bg-black hover:bg-transparent border-2 border-black text-white hover:text-black font-bold py-3 px-6 rounded "
        >
          Contact Me
        </Link>
        <Link
          to="/"
          className="border-2 hover:bg-black hover:text-white  text-black font-bold py-3 px-6 rounded  dark:border-black"
        >
          Reload
        </Link>
      </div>
    </div>
  );
};
