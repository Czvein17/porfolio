import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Typing from "react-typing-effect";
// import resume from "../assets/resume.pdf";
import avatar from "../assets/avatarNOBG.png";
import Icon from "../Components/Icon";
import Tooltip from "../Components/Tooltip";

const LandingPage = () => {
  return (
    <div className="h-auto flex flex-col-reverse items-center xl:flex-row lg:w-[80%] xl:h-full  lg:justify-between ">
      <div className="p-10 flex flex-col gap-4 justify-center items-center lg:justify-start lg:items-start lg:w-5/12 ">
        <Typing
          text={["Czvein Lei Unarce", "Web Developer"]}
          className="text-3xl lg:text-5xl font-bold text-[#3D3B40]"
          speed={200}
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

      <div className="rounded-full h-[300px] w-[300px] bg-[#F6F5F2]  overflow-hidden md:h-[400px] md:w-[400px] lg:h-[600px] lg:w-[600px]">
        <img src={avatar} alt="avatar" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default LandingPage;
