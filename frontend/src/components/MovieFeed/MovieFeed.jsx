import React from 'react';
import MovieCard from '../MovieCard/MovieCard';


const MovieFeed = ({movies}) => {
    return ( 
        <>
        {movies.map((movie,index) =>{
            return(
                <MovieCard key={index} movie={movie}/>
            )
        })}
        </>
     );
}
 
export default MovieFeed;