import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    films: [],
    page: 1,
    errors: '',
}

export const fetchFilms = createAsyncThunk('films/fetchFilms', (page) => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=f88309ead70aa36df12d697b88f24280&page=${page}`)
            .then(response => response.json())
            .then(response => response.results)
            .catch(error => error.message)
})

export const films = createSlice({
    name: 'films',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchFilms.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchFilms.fulfilled, (state, action) => {
            state.loading = false
            state.films = action.payload
        })
        builder.addCase(fetchFilms.rejected, (state, action) => {
            state.loading = false
            state.films = []
            state.errors = action.payload
        })
    }
})

export const selectFilms = (state) => state.films
export const selectPage = state => state.films.page

export default films.reducer