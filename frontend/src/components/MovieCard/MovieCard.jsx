import React from 'react';
import "./MovieCard.css"
import ReviewCard from '../ReviewCard/ReviewCard';


const MovieCard = ({movie}) => {
    
    
    
    return (
        
        
        <div className='card'>
            {console.log("Movie in Movie Card", movie)}
            <h1>{movie.Title}</h1>
            <img src={movie.Poster}/>
            <div className='container-movie-card'>
                <ReviewCard movieID ={movie.imdbID} />
            </div>
        </div>
     );
}
 
export default MovieCard;