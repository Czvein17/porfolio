import PropTypes from "prop-types";
import { motion } from "framer-motion";

import { FaCodeBranch, FaTerminal } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";

import SkillsCard from "../../../Components/SkillsCard";

const feSkills = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1024px-React_Logo_SVG.svg.png",
    name: "React",
  },
  {
    src: "https://cdn.freebiesupply.com/logos/thumbs/2x/javascript-logo.png",
    name: "Javascript",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png?20211001194333",
    name: "Tailwind",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/121px-Sass_Logo_Color.svg.png",
    name: "Scss",
  },

  {
    src: "https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png",
    name: "HTML",
  },

  {
    src: "https://logos-download.com/wp-content/uploads/2024/01/CSS3_Logo-700x794.png",
    name: "CSS",
  },
];

const beSkills = [
  {
    src: "https://logos-download.com/wp-content/uploads/2016/09/Node_logo_NodeJS.png",
    name: "Node Js",
  },
  {
    src: "https://cdn.freebiesupply.com/logos/large/2x/express-109-logo-png-transparent.png",
    name: "Express",
  },
  {
    src: "https://logos-download.com/wp-content/uploads/2016/09/MongoDB_logo_Mongo_DB.png",
    name: "MongoDB",
  },
  {
    src: "https://logos-download.com/wp-content/uploads/2016/05/MySQL_logo_logotype.png",
    name: "MySQL",
  },
];

const otherSkill = [
  {
    src: "https://logos-download.com/wp-content/uploads/2016/09/Bitbucket_logo.png",
    name: "Bitbucket",
  },
  {
    src: "https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png",
    name: "Github",
  },
  {
    src: "https://logos-download.com/wp-content/uploads/2021/01/Jira_Logo.png",
    name: "Jira",
  },
  {
    src: "https://logos-download.com/wp-content/uploads/2020/06/Postman_Logo.png",
    name: "Postman",
  },
];

const Cards = ({ children, title, Icon }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="bg-[#fff] rounded-xl flex flex-col justify-center items-center h-[450px] lg:w-[30%] shadow-lg"
    >
      <div className="flex flex-row justify-center items-center gap-2">
        {<Icon size={30} />}
        <h1 className="text-2xl">{title}</h1>
      </div>
      <div className="w-[80%] flex flex-row justify-center items-center gap-4 pt-10 flex-wrap ">
        {children}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const containerVariants = {
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="h-auto lg:h-[90vh] lg:w-full flex flex-col  items-center gap-5 py-14 bg-[#F6F5F2] ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1, ease: "easeOut" },
        }}
        className="flex flex-col justify-center items-center py-12"
      >
        <h1 className="text-3xl">Skills</h1>
        <p className="text-lg">These are some of my technical skills</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col lg:flex-row justify-center items-center gap-5 p-5"
      >
        <Cards title={"Frontend"} Icon={FaTerminal}>
          {feSkills.map((skill) => (
            <SkillsCard
              key={skill.name}
              {...skill}
              className="w-[calc(33.333%-1rem)]"
            />
          ))}
        </Cards>

        <Cards title={"Backend"} Icon={FaCodeBranch}>
          {beSkills.map((skill) => (
            <SkillsCard
              key={skill.name}
              {...skill}
              className="w-[calc(33.333%-1rem)]"
            />
          ))}
        </Cards>
        <Cards title={"Others"} Icon={FaBrain}>
          {otherSkill.map((skill) => (
            <SkillsCard
              key={skill.name}
              {...skill}
              className="w-[calc(33.333%-1rem)]"
            />
          ))}
        </Cards>
      </motion.div>
    </div>
  );
};

Cards.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
};

export default Skills;

{
  /* <div className="w-[80%] flex flex-row justify-center items-center gap-4 pt-10 flex-wrap bg-red-300">
  {feSkills.map((skill) => (
    <SkillsCard
      key={skill.name}
      {...skill}
      className="w-[calc(33.333%-1rem)]"
    />
  ))}
</div>; */
}
