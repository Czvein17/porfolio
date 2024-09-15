import { motion } from "framer-motion";
import Typing from "react-typing-effect";

import SOCIALS from "../Socials/Socials";

import avatar from "../assets/avatarNOBG.png";
import SocialsIconAnimation from "../Components/Animation/SocialsIconAnimation";
import { useState } from "react";

const Home = () => {
  const [animationPhase, setAnimationPhase] = useState("parent");

  const parentVariants = {
    hidden: { x: "-100vw" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0 },
    show: { scale: 1 },
  };

  const popupVariants = {
    hidden: { scale: 0.1 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex flex-col-reverse justify-center items-center xl:flex-row lg:w-[80%] xl:h-full h-screen lg:justify-between ">
      <motion.div
        className="p-10 flex flex-col gap-5 justify-center items-center lg:justify-start lg:items-start lg:w-5/12 "
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        onAnimationComplete={() => setAnimationPhase("container")}
      >
        <Typing
          text={["Czvein Lei Unarce", "Web Developer", "BSIT Student", "Gamer"]}
          className="text-3xl lg:text-5xl font-bold text-[#3D3B40]"
          speed={100}
          eraseSpeed={100}
          eraseDelay={2000}
          typingDelay={500}
        />

        <p className="text-center text-lg font-normal lg:text-justify py-2">
          Hello there, I&apos;m Czvein (you can call me Lei). Currently, I am
          studying BSIT at PHINMA Saint Jude, currently a 2nd-year student. I
          want to be a fullstack developer. I love watching movies, especially
          sci-fi, action, adventure, and kdrama genres. When I feel bored or
          stuck in coding, I enjoy playing games.
        </p>

        <a href="/" target="_blank" rel="noopener noreferrer">
          <button className="shadow-md border-2 border-black px-4 py-2 rounded-xl w-[230px] transition-all bg-black text-white hover:bg-transparent hover:text-black">
            Download CV
          </button>
        </a>

        <motion.div
          className="flex gap-6 pt-4"
          variants={containerVariants}
          initial="hidden"
          animate={animationPhase === "container" ? "show" : "hidden"}
        >
          {SOCIALS.map((icon, index) => (
            <SocialsIconAnimation
              key={index}
              icon={icon.icon}
              link={icon.link}
              color={icon.color}
              message={icon.message}
              itemVariants={itemVariants}
            />
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        variants={popupVariants}
        initial="hidden"
        animate="visible"
        className="rounded-full h-[300px] w-[300px] bg-[#F6F5F2]  overflow-hidden md:h-[400px] md:w-[400px] lg:h-[600px] lg:w-[600px] drop-shadow-xl"
      >
        <img src={avatar} alt="avatar" className="max-w-full h-auto" />
      </motion.div>
    </div>
  );
};

export default Home;
