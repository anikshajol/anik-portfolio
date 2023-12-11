import { useEffect, useState } from "react";
import Title from "../components/Title/Title";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <section className="container mx-auto">
      <Title heading={"Skills"}></Title>
      <div className="grid grid-cols-1 px-4  md:grid-cols-2 justify-center items-center ">
        {skills.map((skill) => (
          <section className="" key={skill.id}>
            <div className="card md:card-side text-white shadow-xl">
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
