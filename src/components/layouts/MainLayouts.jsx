import { NavLink } from "react-router-dom";
import "./navlink.css";
import DownloadResume from "../resumeButton/DownloadResume";

const MainLayouts = ({ children }) => {
  const menuLink = (
    <>
      <NavLink to={"/"} className="p-[10px]">
        Home
      </NavLink>
      <NavLink to={"/about"} className="p-[10px]">
        About Me
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-200">
            <div className="max-w-[1200px] w-full mx-auto ">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1 text-orange-500 font-bold text-2xl px-2 mx-2">
                AH
              </div>
              <div className="md:hidden">
                <DownloadResume></DownloadResume>
              </div>
              <div className="flex-none hidden lg:block">
                <div className="menu gap-5 text-lg font-bold menu-horizontal">
                  {/* Navbar menu content here */}
                  {menuLink}
                </div>
              </div>
            </div>
          </div>
          {/* Page content here */}

          {children}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu gap-5 text-lg font-bold p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            {menuLink}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainLayouts;
