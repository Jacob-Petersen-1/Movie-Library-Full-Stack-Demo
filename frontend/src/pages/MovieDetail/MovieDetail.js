import React from 'react';
import { useLocation } from 'react-router-dom';


const MovieDetailPage = () => {

const {state} = useLocation()

    return (
        <div className='container'>
            {console.log("This is the state in Movie Details",state)}
            <h1>{state.title}</h1>
            <img src={state.img}/>

        </div> 
     );

}
 
export default MovieDetailPage;