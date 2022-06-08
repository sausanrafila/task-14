import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function TopRatedMovie(){
    const [movies, setMovies] = useState([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function getTopRatedMovies (){
        const response = await axios(ENDPOINTS.TOPRATED);

        setMovies(response.data.results);
    }

    useEffect(
        getTopRatedMovies,[]);
    return(
        <div>
            <Hero />
            <Movies movies={movies} title='Top Rated Movies' iteration ={true}/>
        </div>
    )
}

export default TopRatedMovie;