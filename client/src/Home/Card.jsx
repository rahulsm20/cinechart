import React from "react";
const Card = (props) => {
  return (
    <a className="card movie m-3 col-lg-2 col-sm-5 col-xs-5 text-decoration-none text-white" href={"/"+props.link}>
      <img loading="lazy" className="movieImage" src={props.pic} alt="movieName" />
      <div className="card-body movieName text-center">{props.link}</div>
    </a>
  );
};

export default Card;
