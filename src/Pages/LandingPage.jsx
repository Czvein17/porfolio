import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Typing from "react-typing-effect";
// import resume from "../assets/resume.pdf";
import avatar from "../assets/avatarNOBG.png";
import Icon from "../Components/Icon";
import Tooltip from "../Components/Tooltip";

const LandingPage = () => {
  return (
    <div className="flex flex-col-reverse items-center lg:flex-row lg:w-[80%] lg:h-full  lg:justify-between">
      <div className="p-10 flex flex-col gap-3 justify-center items-center lg:justify-start lg:items-start lg:w-5/12 ">
        <Typing
          text={["Czvein Lei Unarce"]}
          className="text-3xl lg:text-5xl font-bold text-[#686D76]"
          speed={200}
          eraseSpeed={50}
          eraseDelay={2000}
          typingDelay={500}
        />
        <h4 className="text-xl font-semibold ">BSIT Student</h4>
        <p className="text-center font-normal lg:text-justify">
          Hello there, I&apos;m Czvein (you can call me Lei). Currently, I am
          studying BSIT at PHINMA Saint Jude College, currently a 2nd-year
          student. I want to be a fullstack developer. I love watching movies,
          especially sci-fi, action, adventure, and kdrama genres. When I feel
          bored or stuck in coding, I enjoy playing games.
        </p>
        <div className="flex gap-6 pt-4">
          <Tooltip message="Facebook">
            <Icon
              icon={FaFacebook}
              link="https://www.facebook.com/LeiDump1"
              color={"#000"}
            />
          </Tooltip>

          <Tooltip message="Github">
            <Icon
              icon={FaGithub}
              link="https://github.com/czvein17"
              color={"#000"}
            />
          </Tooltip>

          <Tooltip message="Instagram">
            <Icon
              icon={FaInstagram}
              link="https://www.instagram.com/ccziiii/"
              color={"#000"}
            />
          </Tooltip>

          <Tooltip message="Linkedin">
            <Icon
              icon={FaLinkedin}
              link="https://www.linkedin.com/in/czvein-lei-unarce-47645828b"
              color={"#000"}
            />
          </Tooltip>
        </div>
      </div>

      <div className="rounded-full h-[300px] w-[300px] bg-[#686D76] overflow-hidden md:h-[400px] md:w-[400px] lg:h-[600px] lg:w-[600px]">
        <img src={avatar} alt="avatar" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default LandingPage;
