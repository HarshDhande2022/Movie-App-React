import React, { useState, useEffect } from "react";

const Movie = () => {
  const [movieData, setMovieData] = useState([]);
  const [movieTitle, setMovieTitle] = useState('Expendables');
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if(movieTitle !== undefined){
    const fetchMovies = async () => {
      const URL = `http://www.omdbapi.com/?s=${movieTitle}&apikey=f2c67f94`;
      const response = await fetch(URL);
      const final_Data = await response.json();
      //console.log(final_Data.Search);
      setMovieData(final_Data.Search);
    };
            fetchMovies();
  }
    // eslint-disable-next-line
  }, [isClicked]);
  return (
    <>
      <div>
        <div className="header">
          <h1>HOOKED</h1>
        </div>
        <div className="main">
          <input type="text" name="search" placeholder="Search Here" onChange={(e) => {
              setMovieTitle(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setIsClicked((prevState) => !prevState);
            }}
            className="findMovie"
          >
            Search
          </button>
        </div>
        <div className="mainContainer">
          <p>Find Your favourite Movies</p>
        </div>
        <div className="showData">
          {movieData !== undefined ? movieData.map((item, i) => {
            return (
              <div key={i} className="showCards">
                <h4>{item.Title}</h4>
                <img src={item.Poster} className="picture" alt="poster"/>
                <p>({item.Year})</p>
              </div>
            );
          }):false}
        </div>
      </div>
    </>
  );
};
export default Movie;