import Movie from "../movie/Movie";
import styles from "./Movies.module.css"


function Movies(props){
    const {movies,setMovies, title} = props;
    

    //membuat function handleevent
    function handleClick(){
        const movie = {
            id: "xyz",
            title: "Memento",
            year:2021,
            type:"Movie",
            poster:"https://picsum.photos/300/400"
        }

        //menjalankan fungsi setMovies
        //tambahkan movie kedalam movies
        //menggunakan spread operator : copy data array
        setMovies([...movies, movie])
    }

    return(
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}> {title} </h2>
                <div className={styles.movie__container}>
                {movies.map((movie, i) => <Movie movie={movie} />)}
                </div>
                <button onClick={handleClick} >Add Movie</button>
            </section>
        </div>
    )
}

export default Movies;