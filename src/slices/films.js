import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    films: [],
    page: 1,
    total_pages: 1,
    errors: '',
}

export const fetchFilms = createAsyncThunk('films/fetchFilms', async (page) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=f88309ead70aa36df12d697b88f24280&page=${page}`)
        const data = await response.json()
        return data
    } catch (error) {
        return error.message
    }
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
            state.films = action.payload.results
            state.page = action.payload.page
            state.total_pages = action.payload.total_pages
        })
        builder.addCase(fetchFilms.rejected, (state, action) => {
            state.loading = false
            state.films = []
            state.errors = action.payload
        })
    }
})

export const selectFilms = (state) => state.films.films
export const selectPage = (state) => state.films.page
export const selectTotalPage = (state) => state.films.total_pages

export default films.reducer