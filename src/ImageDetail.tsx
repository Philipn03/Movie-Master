import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import './App.css';
function ImageDetail(){
    const navigate = useNavigate();
    const [clickedImage, setClickedImage] = useState([]);
    const handleImageClick = (id: string) => {
        const apikey = '4a440e80c044bfbc54deadcb12f1bb19';
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`;
        
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
       console.log(data);
        // Redirect the user to the MovieDetail page with the data as a URL parameter
        navigate('/movie-info', { state: { data: data } });

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    };

    return (
        <>
            <div className='popular-section'>
                <div className='popular-font'>
                    <h1 style={{ fontSize: '50px'}}> Popular Movies</h1>
                </div>
                <div className="row">
                    <div className="column">
                        <img src="movie_pics/movie3.jpg" alt="First movie" className="adjust" onClick={() => handleImageClick('502356')}/>
                    </div>
                    <div className="column">
                    <img src="movie_pics/movie4.jpg" alt="Second movie" className="adjust" onClick={() => handleImageClick('667538')}/>
                    </div>
                    <div className="column">
                    <img src="movie_pics/movie5.jpeg" alt="Third movie" className="adjust" onClick={() => handleImageClick('346698')}/>
                    </div>
                    <div className="column">
                    <img src="movie_pics/movie6.jpeg" alt="Fourth movie" className="adjust" onClick={() => handleImageClick('872585')}/>
                    </div>  
                    <div className="column">
                    <img src="movie_pics/movie7.webp" alt="Fifth movie" className="adjust" onClick={() => handleImageClick('603692')}/>
                    </div>
                    <div className="column">
                    <img src="movie_pics/movie8.jpeg" alt="Six movie" className="adjust" onClick={() => handleImageClick('447365')}/>
                    </div>
                    <div className="column">
                    <img src="movie_pics/movie9.jpeg" alt="Seven movie" className="adjust" onClick={() => handleImageClick('805320')}/>
                    </div>
                </div>
            </div>

            <div className='popular-section'>
                <div className='popular-font'>
                    <h1 style={{ fontSize: '50px' }}> Top Rated</h1>
                </div>
                <div className="row">
                    <div className="column">
                    <img src="movie_pics/movie10.jpg" alt="First movie" className="adjust" onClick={() => handleImageClick('361743')}/>
                    </div>
                    <div className="column">
                    <img src="movie_pics/movie11.jpeg" alt="Second movie" className="adjust" onClick={() => handleImageClick('569094')}/>
                    </div>
                    <div className="column">
                    <img src="movie_pics/movie12.jpg" alt="Third movie" className="adjust" onClick={() => handleImageClick('278')}/>
                    </div>
                    <div className="column">
                    <img src="movie_pics/movie13.jpg" alt="Fourth movie" className="adjust" onClick={() => handleImageClick('238')}/>
                    </div>  
                    <div className="column">
                    <img src="movie_pics/movie14.jpg" alt="Fifth movie" className="adjust" onClick={() => handleImageClick('13')}/>
                    </div>
                    <div className="column">
                    <img src="movie_pics/movie15.jpg" alt="Six movie" className="adjust" onClick={() => handleImageClick('354912')}/>
                    </div>
                    <div className="column">
                    <img src="movie_pics/movie16.jpg" alt="Seven movie" className="adjust" onClick={() => handleImageClick('157336')}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ImageDetail;