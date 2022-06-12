import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../App.css";
import Button from "../button";
import Header from "../header";

const About = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <div className="app">
      <Header />

      <div className="back-button">
        <Button onClick={handleBackButtonClick}>voltar</Button>
      </div>
      <div className="text-about">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
          sapiente pariatur expedita animi molestiae inventore.
        </p>
      </div>
    </div>
  );
};

export default About;
