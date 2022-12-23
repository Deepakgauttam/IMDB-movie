import React from 'react'
// import MovieDetails from "./MovieDetails";

const Details = ({ movieDet }) => {
  return (
    <div className="movieDetails">
      <img
        src={`https://image.tmdb.org/t/p/original${
          movieDet ? movieDet.poster_path : ""
        }`}
        alt="movieDetails"
      />
    </div>
  );
};

export default Details;
