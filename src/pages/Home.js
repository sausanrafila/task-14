import AddMovieForm from "../components/form/AddMovieForm/AddMovieForm";
import Hero from "../components/hero/Hero";
import Movies from "../components/movies/Movies";
import {useState} from "react"
import data from "../utils/constants/data";


function Home(){
    const [movies,setMovies] = useState(data);

    return(
        <div>
            <Hero/>
            <Movies movies={movies} setMovies={setMovies}  title='Latest Movies'/>
            <AddMovieForm  movies={movies} setMovies={setMovies}/>
        </div>
    )

    // return <Counter/>
}

export default Home;