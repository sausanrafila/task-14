import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constants/endpoints";

function TopRatedMovie(){
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function getTopRatedMovies (){
        const response = await axios(ENDPOINTS.TOPRATED);
        dispatch(updateMovies(response.data.results));
    }

    useEffect(
        getTopRatedMovies,[]);
    return(
        <div>
            <Hero />
            <Movies title='Top Rated Movies' iteration ={true}/>
        </div>
    )
}

export default TopRatedMovie;