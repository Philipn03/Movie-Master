import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

function MovieInfo() {
  const location = useLocation();
  const { data } = location.state as {
    data: {
      poster_path: string | null;
      original_title: string;
      overview: string;
      vote_average: string;
      release_date: string;
    };
  };

  return (
    <div className="movie-info-container">
      {/* Display movie details using the data object */}
      <div className="movie-details">
        <div className="title">
          <p>{data.original_title}</p>
        </div>
        <br />
        <div className="stats">
          <p>Overview</p>
        </div>
        <p>{data.overview}</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="stats2">

        <p>
            <span className="underline">Rating:</span> {data.vote_average}
        </p>
        <p>
            <span className="underline">Release Date:</span> {data.release_date}
        </p>
        </div>
      </div>
      <div className="movie-image">
        {data.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            alt={data.original_title}
          />
        )}
      </div>
    </div>
  );
}

export default MovieInfo;
