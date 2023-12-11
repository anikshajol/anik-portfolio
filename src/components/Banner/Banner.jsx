import "./Banner.css";
import Marquee from "react-fast-marquee";

import DownloadResume from "../resumeButton/DownloadResume";
const Banner = () => {
  return (
    <div className="bg-black h-screen z-10 ">
      <div className="hidden md:block md:mt-20">
        <DownloadResume></DownloadResume>
      </div>
      <h2 className=" text-4xl md:text-6xl pt-9 md:pt-0 text-center lg:mr-80  text-[#03a9f4]">
        Hello there! <span className="text-orange-500">I am</span>
      </h2>
      <section className="name">
        <div class="content">
          <h2>AnikHasan </h2>
          <h2>AnikHasan </h2>
        </div>
      </section>
      <h2 className=" text-3xl md:text-6xl text-center mt-1 md:mt-2 lg:ml-80 text-orange-500 md:text-[#03a9f4]">
        a React web developer
      </h2>
      <div className="hidden md:block">
        <Marquee className="mt-14">
          <span className="text-white md:text-orange-500 font-semibold text-lg">
            {" "}
            Let's build the web of tomorrow together! Open to new opportunities,
            collaborations
          </span>
        </Marquee>
      </div>
    </div>
  );
};

export default Banner;
