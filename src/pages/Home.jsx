import { Element } from "react-scroll";
import Banner from "../components/Banner/Banner";
import About from "./About";
import Skills from "./Skills";
import Resume from "./Resume";

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
        <Resume></Resume>
      </Element>
    </div>
  );
};

export default Home;
