import { useSelector } from "react-redux";
import Movie from "../movie/Movie";
import styles from "./Movies.module.css"


function Movies(props){
    const { title} = props;

   const movies =  useSelector((store)=>store.movies.movies);
    

    //membuat function handleevent
    
    return(
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}> {title} </h2>
                <div className={styles.movie__container}>
                {movies.map((movie, i) => <Movie movie={movie} />)}
                </div>
            </section>
        </div>
    )
}

export default Movies;