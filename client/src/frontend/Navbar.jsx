import React from "react";
const HomePage = () => {
  return (
    <div>
      <nav className="nav nav-expand-lg nav-collapse">
        <ul className="d-flex flex-row list-group justify-content-center align-items-center p-2">
          <li className="nav-item p-2 text-white" id="logo">
            cinechart{" "}
          </li>
          <li className="nav-item px-2 mx-5">
            <div className="input-group">
              <input
                className="form-control p-2"
                id="search"
                placeholder="Search for your favorite movies,tv shows and more"
              />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
