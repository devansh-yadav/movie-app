import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// API
import axios from 'axios'
import { requests } from '../../api-endpoints/requests'

const initialState = {
    moviesByCategory: {
        netflixOriginals: [],
        trending: [],
        topRated: [],
        actionMovies: [],
        romanceMovies: [],
        comedyMovies: [],
        horrorMovies: [],
        documentaries: [],
        popularTvShows: [],
        popularMovies: [],
    },
    status: 'idle',
};

export const fetchMovies = createAsyncThunk(
    'Movies/fetchMovies',
    (_, {dispatch}) => {

        Object.entries(requests).forEach(([key, value]) => {

            axios.get(value)
                .then(response => {

                    const movies = response.data.results;
                    dispatch(addMovies({ key, movies }));

                }
            )

        })
    }
);

export const moviesData = createSlice({
    name: 'Movies',
    initialState,
    reducers: {
        addMovies: (state, action) => {
            state.moviesByCategory[action.payload.key] = action.payload.movies;
        }
    },
    extraReducers: {

        [fetchMovies.pending]: (state) => {
            state.status = 'loading';
        },

        [fetchMovies.fulfilled]: (state) => {
            state.status = 'succeeded';
        },

        [fetchMovies.rejected]: (state) => {
            state.status = 'failed';
        },
    },
});

export const { addMovies } = moviesData.actions;

export default moviesData.reducer;