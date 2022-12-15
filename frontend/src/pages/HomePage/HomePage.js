import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { KEY } from "../../localKey"
import axios from "axios";

//components
import MovieFeed from "../../components/MovieFeed/MovieFeed";


const HomePage = () => {
  
  
  const [user, token] = useAuth();
  const [movies, setMovies] = useState([]);

//Function to retrieve the Data
  const fetchMovieData = async () => {
    try {
      let response = await axios.get(
        `http://www.omdbapi.com/?s=avatar&apikey=${KEY}`
      );
      console.log("Movie Data:", response.data.Search);
      setMovies(response.data.Search);
    } catch (error) {
      console.log(error.response);
    }
  };


  //Fetching Movie Data
  useEffect(() => {
    fetchMovieData();
  }, []);



  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <MovieFeed movies={movies}/>
    </div>
  );
};

export default HomePage;
