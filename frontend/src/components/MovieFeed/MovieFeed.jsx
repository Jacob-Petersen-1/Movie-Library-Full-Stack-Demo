import React from 'react';
import MovieCard from '../MovieCard/MovieCard';


const MovieFeed = ({movies}) => {
    return ( 
        <div className='move-feed'>
        {movies.map((movie,index) =>{
            return(
                <MovieCard key={index} movie={movie}/>
            )
        })}
        </div>
     );
}
 
export default MovieFeed;