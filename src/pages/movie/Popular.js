import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function PopularMovie(){
    const [movies, setMovies] =useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{
        getPopularMovies();
    },[]);

    async function getPopularMovies() {
        const response = await axios(ENDPOINTS.POPULAR);

        setMovies(response.data.results);
    }

    console.log(movies);


    return(
        <div>
            <Hero  />
            <Movies movies={movies} title='Popular Movies'/>
        </div>
    )
}

export default PopularMovie;