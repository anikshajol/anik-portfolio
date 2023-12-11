import { FaFileDownload } from "react-icons/fa";

const DownloadResume = () => {
  return (
    <div className="">
      <div className="text-center py-2 md:text-right md:pr-10 md:pt-5">
        <a href="Anik_Hasan_resume.pdf" download="Anik_Hasan_resume.pdf">
          <button className="btn bg-[#03a9f4] hover:bg-[#f97416a8]  outline-none border-none">
            <FaFileDownload className="text-[white] text-lg" />
            <span className="text-white text-lg"> Download Resume</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default DownloadResume;
