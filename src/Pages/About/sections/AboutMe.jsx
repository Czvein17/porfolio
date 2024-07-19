import {
  FaGamepad,
  FaTv,
  FaTerminal,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

import Avatar from "../../../assets/avatarNOBG.png";

const AboutMe = () => {
  const hobby = [
    {
      icon: FaGamepad,
      name: "Gaming",
    },
    {
      icon: FaTerminal,
      name: "Coding",
    },
    {
      icon: FaTv,
      name: "Movie",
    },
    {
      icon: FaGamepad,
      name: "Music",
    },
  ];

  const containerVariants = {
    visible: {
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  // Variants for each item
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-[100%] h-auto lg:h-screen lg:w-full lg:flex  justify-center items-center ]">
      <div className="h-auto lg:h-screen md:w-[50%] flex justify-center items-center  p-10">
        <motion.div
          className="bg-[#F6F5F2] h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] rounded-full overflow-hidden"
          initial={{ x: "-10vw", opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
          }}
        >
          <img
            src={Avatar}
            alt="avatar"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>

      <div className="h-auto lg:w-[60%] flex items-center p-5">
        <div className=" h-auto p-5 gap-6 flex flex-col items-center text-center lg:w-2/3  lg:justify-center lg:items-start lg:text-left ">
          <motion.div
            initial={{ x: "10vw", opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, ease: "easeOut" },
            }}
          >
            <h1 className="text-3xl font-bold ">ABOUT ME</h1>
            <p className="text-lg font-normal">
              <strong>Hi, I am Czvein Lei, 18 years old.</strong>
              <br />
              I am a 2nd-year student studying Information Technology at PHINMA
              Saint Jude. My goal is to become a full stack developer,
              proficient in both frontend and backend technologies.
              <br />
              <br />
              Currently, I am honing my skills in various programming languages
              and frameworks, including React, Tailwind, SCSS, Express, Mongodb
              backend integrations. I have a strong passion for creating
              seamless user experiences and developing efficient, scalable
              applications.
            </p>

            <ul className="flex flex-col justify-center items-center lg:items-start gap-1 text-lg my-2 py-2">
              <li className="flex gap-2 items-center">
                <FaEnvelope size={20} />
                <strong>Email: </strong>
                czveinlei17@gmail.com
              </li>
              <li className="flex gap-2 items-center">
                <FaPhoneAlt size={20} />
                <strong>Phone: </strong>
                099-121-59668
              </li>
            </ul>
          </motion.div>

          <motion.ul
            className="flex lg:flex-row flex-col justify-center items-center gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible" // Trigger the animation when the ul is in view
          >
            {hobby.map((item, index) => (
              <motion.li
                key={index}
                className="w-[110px] p-3 rounded-xl flex gap-2 items-center justify-center hover:bg-transparent text-black border-black border-2 shadow-md"
                variants={itemVariants}
              >
                <item.icon size={24} />
                {item.name}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
