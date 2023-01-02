import React from 'react';
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom';

import "./MovieCard.css"
import ReviewCard from '../ReviewCard/ReviewCard';



const MovieCard = ({movie}) => {
const navigate = useNavigate()

const handleClick =(movie) =>{
    navigate(`/details/${movie.imdbID}`,{
        state:{
            title: movie.Title,
            img: movie.Poster,
        }
    })

}
    
    
    
    return (
        
        
        <div className='card'>
            {console.log("Movie in Movie Card", movie)}
            <Link to={`/details/${movie.imdbID}`}>
            <h1>{movie.Title}</h1>
            <img src={movie.Poster}/>
            </Link>
            <div className='container-movie-card'>
                <ReviewCard movieID ={movie.imdbID} />
                <button onClick={() => handleClick(movie)}>See Details!</button>
            </div>
        </div>
     );
}
 
export default MovieCard;