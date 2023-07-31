import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../App.css';



function MovieDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state as { data: Array<any> }; // Extract data from location.state

  const info = (movie:any) => {
    console.log(movie);
    navigate('/movie-info', { state: { data: movie} });
  };

  return (
    <div className="movie-grid">
      {/* Display movie details using the data array */}
      {data.map((movie: { id: number; poster_path: string | null; original_title: string }) => (
        // Check if the movie has a poster_path before rendering
        movie.poster_path && (
          <div className="movie-item" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.original_title}
              onClick={() => info(movie)}
            />
            <div className="text">
              <p>{movie.original_title}</p>
            </div>
          </div>
        )
      ))}
    </div>
  );
}

export default MovieDetail;
