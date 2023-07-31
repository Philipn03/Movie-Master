import React, { useState } from "react";
import ImageDetail from '../ImageDetail';

import { useNavigate, useLocation } from 'react-router-dom';
import '../App.css';
interface MovieTitleProps {
  theme: string;
}

function MovieTitle({ theme }: MovieTitleProps) {
  const [movieName, setMovieName] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate(); // Get the history object from react-router-dom
  const location = useLocation();

  const titleStyle = {
    fontSize: "75px",
    fontWeight: "bold",
    marginTop: "40px",
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMovieName(event.target.value);
  };

  const handleSearch = () => {
    // Make the API request to search for movies based on the movieName
    if (movieName.trim() === '') {
      // If search input is empty, do not perform the API request and redirect
      // You can handle this case as per your requirement (e.g., show an error message)
      navigate('/error');
      return;
    }

    const apikey = '4a440e80c044bfbc54deadcb12f1bb19';
    const query = encodeURIComponent(movieName.trim());
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apikey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Process the search results and update the state
        setSearchResults(data.results);
        // console.log(data.results);

        if (data.results.length === 0) {
          // If there are no search results, handle this case as per your requirement (e.g., show an error message)
          navigate('/error');
          return;
        }

        data.results.forEach((movie: { original_title: any; }) => {
          console.log("Movie Title:", movie.original_title);
        });

        // Redirect the user to the MovieDetail page with the data as a URL parameter
        navigate('/movie-list', { state: { data: data.results } });

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <>
      <div className="cover-image" style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), #151515), url(movie_pics/movie2.jpeg)', 
          backgroundSize: 'cover', border: '2px solid #000000'}}> 
        <div className="movie-title">
          <h1 style={titleStyle}>Welcome to Movie Searcher</h1>
          <p>Find any show or movie you want</p>
          <input
            type="text"
            placeholder="Search for a movie!"
            aria-label="Search for a movie!"
            aria-describedby="button-addon2"
            onChange={handleInputChange} // Handle input change and update the movieName state
          />
          <button
            className="button-format"
            type="button"
            id="button-addon2"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      
      <ImageDetail /> 


    </>
  );
}

export default MovieTitle;
