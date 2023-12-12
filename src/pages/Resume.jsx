import React from "react";
import Title from "../components/Title/Title";
import SectionTitle from "../components/Title/SectionTitle";
import Card from "../components/ResumeCard/Card";

const Resume = () => {
  return (
    <div className="container mx-auto ">
      <Title heading={"Personal Info"}></Title>

      <div className="flex justify-evenly">
        <div>
          <div>
            <SectionTitle title={"My Education"}></SectionTitle>
          </div>
          <Card
            subTitle={"2011-2016"}
            title={"BBA"}
            cardTitle={"University Of South Asia"}
            description={
              "I Completed my BBA from this university on Human Resource Management"
            }
          ></Card>
        </div>

        <div>
          <div>
            <SectionTitle title={"My Experience"}></SectionTitle>
          </div>
          <Card
            subTitle={"2020-till"}
            title={"Assistant Manager"}
            cardTitle={"Ajmal Overseas ltd."}
            description={
              "I was join this company as a Officer. Now i am Assistant Manager of this company."
            }
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default Resume;
