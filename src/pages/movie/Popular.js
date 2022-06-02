import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies";

function PopularMovie(){
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

    const [movies, setMovies] =useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{
        getPopularMovies();
    },[]);

    async function getPopularMovies() {
        const response = await axios(URL);

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