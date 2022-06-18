
//import createSlice
import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/data";

//buat slice: untuk generate action dan reducer
//menerima parma object: name, initialsatate, reducer

const moviesSlice =createSlice(
    {
        name:"Movies Slice",
        initialState :{
            movies: data,
        },
        reducers: {
            addMovie(state, action) {
                state.movies.push(action.payload)
            },
            deleteMovie() {},
            updateMovies() {},
            //membuat reducer updateMovies untuk update movies
            
        },
        updateMovies(state, action){
            state.movies = action.payload;
        }
    }
);


//generate action dan reducers
const moviesReducer = moviesSlice.reducer;
const { addMovie, deleteMovie, updateMovies} = moviesSlice.actions;

//export action dan reducer

export default moviesReducer;
export {addMovie,deleteMovie, updateMovies};
