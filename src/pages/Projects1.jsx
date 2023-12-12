import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/images/ams/Screenshot_1.jpg";
import img2 from "../assets/images/ams/Screenshot_2.jpg";
import img3 from "../assets/images/ams/Screenshot_3.jpg";
import img4 from "../assets/images/ams/Screenshot_4.jpg";
import img5 from "../assets/images/ams/Screenshot_5.jpg";
import img6 from "../assets/images/ams/Screenshot_6.jpg";
import { Link, useNavigate } from "react-router-dom";
import SectionTitle from "../components/Title/SectionTitle";
const Projects1 = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-center pt-2 px-4 md:flex-row md:gap-28 h-screen ">
      <div className="md:w-1/2 w-[80%]">
        <Carousel autoPlay>
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img2} />
          </div>
          <div>
            <img src={img3} />
          </div>
          <div>
            <img src={img4} />
          </div>
          <div>
            <img src={img5} />
          </div>
          <div>
            <img src={img6} />
          </div>
        </Carousel>
      </div>
      {/* projects details */}
      <div className="space-y-6 text-center md:text-left">
        <SectionTitle title={"Projects Details"}></SectionTitle>
        <p>
          <span className="text-xl font-bold text-white">Project Link:</span>{" "}
          <Link
            className="text-lg text-[#03a9f4]"
            to={"https://asset-management-system-2833d.web.app/"}
            target="_blank"
          >
            Asset Management Website
          </Link>
        </p>
        <p>
          <span className="text-xl font-bold text-white">Technologies:</span>{" "}
          <span className="text-lg text-[#03a9f4] uppercase">
            html5,react,firebase,Node.js, Mongodb,{" "}
          </span>
        </p>
        <div>
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="btn bg-[#03a9f4]"
          >
            {" "}
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects1;
