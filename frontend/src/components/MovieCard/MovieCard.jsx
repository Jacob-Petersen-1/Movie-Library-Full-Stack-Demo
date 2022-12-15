import React from 'react';
import "./MovieCard.css"


const MovieCard = ({movie}) => {
    return ( 
        <div className='card'>
            <h1>{movie.Title}</h1>
            <img src={movie.Poster}/>
            <div className='container-movie-card'>
            </div>
        </div>
     );
}
 
export default MovieCard;