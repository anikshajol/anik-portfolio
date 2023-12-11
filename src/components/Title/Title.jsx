const Title = ({ heading }) => {
  return (
    <div>
      <h1 className="text-4xl text-center pt-8  text-white">{heading}</h1>
      <div className=" border-b-4 w-40 mx-auto pt-3 mb-8 border-b-orange-500"></div>
    </div>
  );
};

export default Title;
