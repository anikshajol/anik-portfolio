import { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <section className="max-w-7xl mx-auto">
      <h1 className="text-4xl text-center pt-8  text-white">Skills</h1>
      <div className=" border-b-4 w-40 mx-auto pt-3 mb-8 border-b-orange-500"></div>
      <div className="grid grid-cols-2   justify-center items-center ">
        {skills.map((skill) => (
          <section
            className="place-content-center place-items-center"
            key={skill.id}
          >
            <div className="card card-side text-white shadow-xl">
              <figure>
                <img src={skill.logo} alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{skill.title}</h2>
                <p> {skill.details} </p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Skills;
