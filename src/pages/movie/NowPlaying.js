import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function NowPlayingMovie(){
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        getNowPlayingMovies();
    })
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function getNowPlayingMovies ()  {
        const response = await axios(ENDPOINTS.NOWPLAYING);
        setMovies(response.data.results);
    }
    console.log(movies);

    
    return(
        <div>
            <Hero />
            <Movies movies={movies} title='Now Playing Movies' />
        </div>
    )
}

export default NowPlayingMovie;