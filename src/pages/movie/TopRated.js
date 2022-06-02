import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies";

function TopRatedMovie(){
    const [movies, setMovies] = useState([]);
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getTopRatedMovies = async()=>{
        const response = await axios(URL);

        setMovies(response.data.results);
    }

    useEffect(
        getTopRatedMovies,[]);
    return(
        <div>
            <Hero />
            <Movies movies={movies} title='Top Rated Movies' />
        </div>
    )
}

export default TopRatedMovie;