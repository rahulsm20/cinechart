import { useState, React, useEffect,useMemo } from "react";
import Card from "./Card";
import axios from "axios";
const Home = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([
    {
      _id: "",
      image: " ",
      name:" "
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
    <Card pic={movie.image} key={movie._id} link={movie.name}/>
  ));
  return (
    <div>
        <nav className="navbar nav-expand-lg ">
          <ul className="navbar-nav me-auto">
            <li className="nav-item p-2 text-white" id="logo">
              cinechart
            </li>
            <li className="nav-item px-2">
              <div className="input-group">
                <input
                  className="form-control p-2"
                  id="search"
                  placeholder="Search for your favorite movies,tv shows and more"
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                  }}
                />
              </div>
            </li>
          </ul>
        </nav>
      
      <p className="popular p-4 my-5 text-white">Popular movies right now</p>
      <div className="d-flex flex-lg-row justify-content-around flex-wrap movies flex-sm-inline-flex flex-sm-column">{moviecard}</div>
    </div>
  );
};

export default Home;
