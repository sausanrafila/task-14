import axios from "axios";
import { useEffect,  } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constants/endpoints";

function PopularMovie(){
    //buat dispatch
    const dispatch = useDispatch();


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{
        getPopularMovies();
    },[]);

    async function getPopularMovies() {
        const response = await axios(ENDPOINTS.POPULAR);

        dispatch(updateMovies(response.data.results))
    }



    return(
        <div>
            <Hero  />
            <Movies title='Popular Movies'/>
        </div>
    )
}

export default PopularMovie;