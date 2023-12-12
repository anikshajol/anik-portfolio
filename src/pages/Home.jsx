import { Element } from "react-scroll";
import Banner from "../components/Banner/Banner";
import About from "./About";
import Skills from "./Skills";
import PersonalInfo from "./PersonalInfo";
import MyProjects from "./MyProjects";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Element name="home">
        <Banner></Banner>
      </Element>
      <Element name="about">
        <About></About>
      </Element>
      <Element name="skill">
        <Skills></Skills>
      </Element>
      <Element name="info">
        <PersonalInfo></PersonalInfo>
      </Element>
      <Element name="projects">
        <MyProjects></MyProjects>
      </Element>
      <Element name="contact">
        <Contact></Contact>
      </Element>
    </div>
  );
};

export default Home;
