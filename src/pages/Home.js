import AddMovieForm from "../components/form/AddMovieForm/AddMovieForm";
import Hero from "../components/hero/Hero";
import Movies from "../components/movies/Movies";
import {useState} from "react"
import data from "../utils/constants/data";
import Counter from "../components/counter";

function Home(){
    const [movies,setMovies] = useState(data);

    return(
        <div>
            <Hero/>
            <Movies movies={movies} setMovies={setMovies}/>
            <AddMovieForm  movies={movies} setMovies={setMovies}/>
        </div>
    )

    // return <Counter/>
}

export default Home;