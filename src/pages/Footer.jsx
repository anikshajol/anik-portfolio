import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
// import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer mt-28 footer-center p-10 bg-[#1f1e1e]  text-primary-content">
        <aside>
          {/* <img className="w-1/2" src={logo} alt="" /> */}
          <p className="font-bold">Let's build the web of tomorrow together!</p>
          <p>Copyright © 2023 - All right reserved</p>
        </aside>
        <nav>
          <h2>Follow Me</h2>
          <div className="grid grid-flow-col gap-4">
            <Link
              className=""
              to={"https://www.facebook.com/anik.shajol"}
              target="_blank"
            >
              <FaFacebook className="text-3xl  rounded-full text-[#0866FF] " />
            </Link>
            <Link className="text-[#0866FF]" to={""}>
              <FaLinkedin
                className="text-3xl"
                to={"https://www.linkedin.com/in/anik-shajol-93a1425a/"}
                target="_blank"
              />
            </Link>
            <Link
              className=""
              to={"https://twitter.com/AnikShajol"}
              target="_blank"
            >
              <FaTwitter className="text-3xl text-[#0866FF] " />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
