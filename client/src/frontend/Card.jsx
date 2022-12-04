import React from "react";
import movie from "../assets/powerMovie.webp";
const Card = () => {
  return (
    <a className="card movie m-5 col-3 text-decoration-none" href="https://google.com">
      <img className="movieImage" src={movie} alt="movieName" />
      <div className="movieName text-center">Project Power</div>
    </a>
  );
};

export default Card;
