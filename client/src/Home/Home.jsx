import { useState, React, useEffect, useMemo } from "react";
import Card from "./Card";
import axios from "axios";
import Footer from "./Footer";
const Home = () => {
  const [query, setQuery] = useState("");

  const [movies, setMovies] = useState([
    {
      _id: "",
      image: " ",
      name: " ",
    },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/movies")
      .then((response) => setMovies(response.data))
      .catch((error) => console.log(error));
  }, []);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      return movie.name.toLowerCase().includes(query.toLowerCase());
    });
  }, [movies, query]);

  const moviecard = filteredMovies.map((movie) => (
    <Card pic={movie.image} key={movie._id} link={movie.name} />
  ));

  return (
    <div>
      <nav className="navbar nav-expand-lg bg-black">
        <ul className="navbar-nav me-auto flex-row">
          <li className="nav-item p-2 text-white" id="logo">
            <a href='/'>
            <img src='..\public\large_cinechart_0.png' className="col-2 p-1"/>
            cinechart
          </a>
          </li>
          <li className="nav-item p-2">
            <div className="input-group">
              <input
                className="form-control p-2"
                id="search"
                placeholder="Search for movie"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
              />
            </div>
          </li>
        </ul>
        <a className="nav-item p-4 text-white" href="/profile">
          {localStorage.getItem("Username")}
        </a>
      </nav>

      <p className="popular p-4 my-5 text-white">Popular movies right now</p>
      <div className="d-flex flex-lg-row justify-content-around flex-wrap movies flex-sm-inline-flex flex-sm-column">
        {moviecard}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
