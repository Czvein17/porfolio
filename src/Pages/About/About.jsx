import AboutMe from "./sections/AboutMe";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
const About = () => {
  return (
    <div className="w-full h-auto  flex flex-col justify-center items-center">
      <AboutMe />
      <Skills />
      <Education />
      {/* <Me /> */}
    </div>
  );
};

export default About;
