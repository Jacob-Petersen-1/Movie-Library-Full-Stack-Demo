import React from 'react';
import "./MovieCard.css"


const MovieCard = ({movie}) => {
    return ( 
        <div className='card'>
            <img src={movie.Poster}/>
            <div className='container-movie-card'>
                <h1>{movie.Title}</h1>
            </div>
        </div>
     );
}
 
export default MovieCard;