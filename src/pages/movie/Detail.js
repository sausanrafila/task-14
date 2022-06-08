import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/movies/Movies";

function Detail(){
    const [movies, setMovies] = useState([]);
    const params = useParams();
    const API_KEY = process.env.REACT_APP_API_KEY;

    useEffect(()=>{
        getRecommendationMovies();
    },[params.id]);

    async function getRecommendationMovies(){
        const URL = `https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=${API_KEY}`;
        const response = await axios(URL);

        setMovies(response.data.results);
    }

    console.log(movies);

    return (
        <>
        <DetailMovie />;
        <Movies movies={movies} />
    </>
    )
}

export default Detail;