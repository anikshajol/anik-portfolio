const Card = ({ subTitle, title, cardTitle, description }) => {
  return (
    <div className="mt-7">
      <div className="card text-white w-96 bg-[#111111] shadow-xl">
        <div className="card-body">
          <button className="btn bg-[#03a9f4] text-lg text-white hover:bg-[#03a9f4]">
            {subTitle}
          </button>
          <h2 className="card-title">{title}</h2>
          <h2 className="card-title">{cardTitle}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
