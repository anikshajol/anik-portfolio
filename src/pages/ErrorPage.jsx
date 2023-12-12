import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);
  return (
    <div className=" h-screen flex flex-col justify-center items-center">
      <h2 className="text-9xl">{error.status}</h2>
      <p className="text-3xl">Oops</p>
      <p className="text-2xl text-center">
        Sorry , an unexpected error has occurred. <br />
        <span className="text-red-600 ">Page {error.statusText}</span>
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
  );
};

export default ErrorPage;
