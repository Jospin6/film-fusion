import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    film: [],
    errors: '',
}

export const fetchFilmDetails = createAsyncThunk("film/fetchFilmDetails", async (film_id) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${film_id}?api_key=f88309ead70aa36df12d697b88f24280`)
        const data = await response.json()
        return data
    } catch (error) {
        return error.message
    }
    
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
            state.errors = ''
        })
        builder.addCase(fetchFilmDetails.rejected, (state, action) => {
            state.loading = false
            state.film = []
            state.errors = action.payload
        })
    }
})

export const selectFilm = (state) => state.film.film
export default filmDetails.reducer