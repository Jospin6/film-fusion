import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {api_key} from '../helpers/index'

const initialState = {
    loading: false,
    film: [],
    genres: [],
    errors: '',
}

export const fetchFilmDetails = createAsyncThunk("film/fetchFilmDetails", async (film_id) => {
    return await fetch(`https://api.themoviedb.org/3/movie/${film_id}?api_key=${api_key}`)
            .then(response => response.json())
            .then(data => data)
            .catch(error => error.message)
})

export const filmDetails = createSlice({
    name: 'film',
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(fetchFilmDetails.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchFilmDetails.fulfilled, (state, action) => {
            state.loading = false
            state.film = action.payload
            state.genres = action.payload.genres
            state.errors = ''
        })
        builder.addCase(fetchFilmDetails.rejected, (state, action) => {
            state.loading = false
            state.film = []
            state.errors = action.payload
        })
    }
})

export const selectFilm = state => state.film.film
export const selectGenres = state => state.film.genres

export default filmDetails.reducer