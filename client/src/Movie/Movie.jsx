import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Movie = () => {
  const { movie } = useParams();
  const [film, setFilm] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/${movie}`)
      .then((response) => setFilm(response.data[0]))
      .catch((error) => console.log(error));
  }, []);
  const handleSubmit = () =>{
    console.log("Movie Added")
  }
  return (
    <div className="container-fluid d-flex text-white font-size-large mt-5 justify-content-center align-self-center">
      <img className="col-lg-4  mx-5" src={film.image} />
      <div>
        <h1 className="mt-5 mx-5">{film.name}</h1>
        <div className="flex-row">
          <p className="mx-5 mt-5">Director : {film.director}</p>
          <p className="mx-5">Genre : {film.genre} </p>
          <p className="mx-5">Rating : {film.rating} ⭐</p>
        </div>
        <p className="mx-5">{film.description}</p>
        <div className="mx-5 flex-row col-5">
          Watch on
          <a href="https://netflix.com" target="blank_">
            <img
              className="col-5"
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            />
          </a>
          <button className="btn bg-warning" type="submit" onClick={handleSubmit}>
            Add to watch list &nbsp;<i className="bi bi-plus-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
