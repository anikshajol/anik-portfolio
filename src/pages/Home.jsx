import { Element } from "react-scroll";
import Banner from "../components/Banner/Banner";
import About from "./About";

const Home = () => {
  return (
    <div>
      <Element name="home">
        <Banner></Banner>
      </Element>
      <Element name="about">
        <About></About>
      </Element>
    </div>
  );
};

export default Home;
