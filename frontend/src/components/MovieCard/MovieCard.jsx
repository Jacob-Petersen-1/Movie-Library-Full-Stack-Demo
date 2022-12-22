import React from 'react';
import { Link } from 'react-router-dom';

import "./MovieCard.css"
import ReviewCard from '../ReviewCard/ReviewCard';



const MovieCard = ({movie}) => {
    
    
    
    return (
        
        
        <div className='card'>
            {console.log("Movie in Movie Card", movie)}
            <Link to={`/details/${movie.imdbID}`}>
            <h1>{movie.Title}</h1>
            <img src={movie.Poster}/>
            </Link>
            <div className='container-movie-card'>
                <ReviewCard movieID ={movie.imdbID} />
            </div>
        </div>
     );
}
 
export default MovieCard;