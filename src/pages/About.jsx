import Title from "../components/Title/Title";

const About = () => {
  return (
    <section className="pb-10 mb-28 px-8 bg-[#1d1c1c] rounded-md -mt-8 container mx-auto">
      {/* <h1 className="text-4xl text-center pt-8  text-white">About Me</h1>
      <div className=" border-b-4 w-40 mx-auto pt-3 mb-8 border-b-orange-500"></div> */}
      <Title heading={"About Me"}></Title>
      <div className="flex flex-col lg:flex-row mx-auto gap-20 items-center">
        <div className="flex-[2] text-justify">
          <h3 className="text-2xl text-white">
            Hey, I'm{" "}
            <span className="text-[#03a9f4] font-bold">Md.Anik Hasan</span>, a
            budding junior web developer with a passion for turning ideas into
            digital realities.
          </h3>
          <p className="text-[#b3b0b0] pt-6 text-lg font-medium">
            Armed with a foundational understanding of HTML, CSS, JavaScript,
            and React I'm on a mission to learn, grow, and contribute to the
            ever-evolving web landscape. I'm excited to be part of a community
            that values innovation, collaboration, and continuous learning.
          </p>
        </div>

        <div className="flex-1">
          <p className="text-lg text-[#ffffff]">
            <span className="font-bold pr-3">Name:</span>Md. Anik Hasan
          </p>
          <div className=" border-b w-[85%]  pt-3 mb-2 border-b-orange-500 opacity-40"></div>

          <p className="text-lg text-[#ffffff]">
            <span className="font-bold pr-3">Email:</span>
            <span className="text-[#03a9f4]">anikshajol@gmail.com</span>
          </p>
          <div className=" border-b w-[85%]  pt-3 mb-2 border-b-orange-500 opacity-40"></div>
          <p className="text-lg text-[#ffffff]">
            <span className="font-bold pr-3">From:</span>
            <span className="">Dhaka,Bangladesh</span>
          </p>
          <div className=" border-b w-[85%]  pt-3 mb-2 border-b-orange-500 opacity-40"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
