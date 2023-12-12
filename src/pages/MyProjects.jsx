import { Link } from "react-router-dom";
import img1 from "../assets/images/Screenshot_1.jpg";
import img2 from "../assets/images/asGadgetScreenshot_1.jpg";
import Title from "../components/Title/Title";
const MyProjects = () => {
  return (
    <>
      <Title heading={"My Projects"}></Title>
      <div className="flex flex-wrap gap-6 justify-around  mt-10">
        <Link to="/project-1">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="">
              <img src={img1} alt="project" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <div className="card-actions">
                <button className="btn btn-primary">Details</button>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/project-2">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="">
              <img src={img2} alt="project" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <div className="card-actions">
                <button className="btn btn-primary">Details</button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MyProjects;
