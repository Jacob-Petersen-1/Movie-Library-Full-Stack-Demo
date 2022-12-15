import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { KEY } from "../../localKey"

import axios from "axios";

const HomePage = () => {
  
  
  const [user, token] = useAuth();
  const [movieData, setMovieData] = useState([]);


  const fetchMovieData = async () => {
    try {
      let response = await axios.get(
        `http://www.omdbapi.com/?s=avatar&apikey=${KEY}`
      );
      console.log("Movie Data:", response.data);
      setMovieData(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    fetchMovieData();
  }, []);
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
    </div>
  );
};

export default HomePage;
