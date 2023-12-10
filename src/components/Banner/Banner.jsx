import "./Banner.css";

import DownloadResume from "../resumeButton/DownloadResume";
const Banner = () => {
  return (
    <div className="bg-black">
      <div className="hidden md:block">
        <DownloadResume></DownloadResume>
      </div>
      <h2 className="text-6xl text-center lg:mr-80  text-[#03a9f4]">
        Hello there! <span className="text-orange-500">I am</span>
      </h2>
      <section className="name max-w-7xl mx-auto my-8 ">
        <div class="content ">
          <h2>AnikHasan </h2>
          <h2>AnikHasan </h2>
        </div>
      </section>
      <h2 className=" text-lg md:text-6xl pb-4 text-center mt-10 lg:ml-80 text-orange-500 md:text-[#03a9f4]">
        a React web developer
      </h2>
    </div>
  );
};

export default Banner;
