// App.tsx
import React, { useState, useEffect } from 'react';
import MovieTitle from "./components/MovieTitle";
import MovieDetail from './components/MovieDetail';
import MovieInfo from './components/MovieInfo';
import ErrorPage from './components/ErrorPage';
import './App.css';


import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';



function App() {

  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };


  return (

      <Router>
        <div className={`App ${theme}`}>
          {/* Top bar*/}
          <div className="topnav">
            <Link className="active" to="/">Home</Link>
            <a href="#news">Movies</a>
            <a href="#contact">Series</a>
            <a href="#display" onClick={toggleTheme} >Display</a>
          </div>

          <Routes>
          {/* Main Page */}
            <Route path="/" element={<MovieTitle theme={theme}/>}/>
            <Route path="/movie-list" element={<MovieDetail/>}/>
            <Route path="/movie-info" element={<MovieInfo/>}/>
            <Route path="/error" element={<ErrorPage/>}/>
          </Routes>

        </div>
      </Router>




  );
}

export default App;
