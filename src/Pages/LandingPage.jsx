import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import resume from "../assets/resume.pdf";
import avatar from "../assets/avatar.png";
import Icon from "../Components/Icon";

const LandingPage = () => {
  return (
    <div className="min-h-screen w-[90%]  flex justify-between items-center px-10">
      <div className="bg-red w-5/12 h-full p-6 rounded-lg mr-6">
        <h1 className="text-3xl font-bold mb-2">Czvein Lei Unarce</h1>
        <h4 className="mb-2 text-xl">BSIT Student</h4>
        <p className="mb-4 text-justify">
          Hello there, I&apos;m Czvein (you can call me Lei). Currently, I am
          studying BSIT at PHINMA Saint Jude College, currently a 2nd-year
          student. I want to be a fullstack developer. I love watching movies,
          especially sci-fi, action, adventure, and kdrama genres. When I feel
          bored or stuck in coding, I enjoy playing games.
        </p>
        <button className="border border-black px-4 py-2 rounded-md transition ease-in-out hover:bg-black  hover:text-white">
          <a href={resume}>Download CV</a>
        </button>

        <div className="flex gap-5 pt-4">
          <Icon icon={FaFacebook} link="https://facebook.com" />
          <Icon icon={FaGithub} link="https://github.com" />
          <Icon icon={FaInstagram} link="https://github.com" />
          <Icon icon={FaLinkedin} link="https://github.com" />
        </div>
      </div>
      <div className="ml-6 pr-11">
        <div className="rounded-full h-[600px] w-[600px] bg-black overflow-hidden">
          <img src={avatar} alt="avatar" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
