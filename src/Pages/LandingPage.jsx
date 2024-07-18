import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Typing from "react-typing-effect";
// import resume from "../assets/resume.pdf";

import avatar from "../assets/avatarNOBG.png";
import SocialsIconAnimation from "../Components/Animation/SocialsIconAnimation";
import { useState } from "react";

const LandingPage = () => {
  const [animationPhase, setAnimationPhase] = useState("parent");

  const parentVariants = {
    hidden: { x: "-100vw" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        duration: 0.3,
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
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const socialIcons = [
    {
      icon: FaFacebook,
      link: "https://www.facebook.com/LeiDump1",
      color: "#000",
      message: "Facebook",
    },
    {
      icon: FaGithub,
      link: "https://github.com/czvein17",
      color: "#000",
      message: "Github",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/ccziiii/",
      color: "#000",
      message: "Instagram",
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/czvein-lei-unarce-47645828b",
      color: "#000",
      message: "Linkedin",
    },
  ];

  return (
    <div className="h-auto flex flex-col-reverse items-center xl:flex-row lg:w-[80%] xl:h-full  lg:justify-between ">
      <motion.div
        className="p-10 flex flex-col gap-4 justify-center items-center lg:justify-start lg:items-start lg:w-5/12 "
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        onAnimationComplete={() => setAnimationPhase("container")}
      >
        <Typing
          text={["Czvein Lei Unarce", "Web Developer"]}
          className="text-3xl lg:text-5xl font-bold text-[#3D3B40]"
          speed={100}
          eraseSpeed={100}
          eraseDelay={2000}
          typingDelay={500}
        />
        <h4 className="text-xl font-semibold ">BSIT Student</h4>
        <p className="text-center text-lg font-normal lg:text-justify ">
          Hello there, I&apos;m Czvein (you can call me Lei). Currently, I am
          studying BSIT at PHINMA Saint Jude College, currently a 2nd-year
          student. I want to be a fullstack developer. I love watching movies,
          especially sci-fi, action, adventure, and kdrama genres. When I feel
          bored or stuck in coding, I enjoy playing games.
        </p>

        <button className="shadow-md border-2 border-black text-black px-4 py-2 rounded-xl w-[210px] transition-all hover:bg-black hover:text-white">
          Download CV
        </button>

        <motion.div
          className="flex gap-6 pt-4"
          variants={containerVariants}
          initial="hidden"
          animate={animationPhase === "container" ? "show" : "hidden"}
        >
          {socialIcons.map((icon, index) => (
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
        className="rounded-full h-[300px] w-[300px] bg-[#F6F5F2]  overflow-hidden md:h-[400px] md:w-[400px] lg:h-[600px] lg:w-[600px]"
      >
        <img src={avatar} alt="avatar" className="max-w-full h-auto" />
      </motion.div>
    </div>
  );
};

export default LandingPage;
