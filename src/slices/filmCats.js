import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    casts: [],
    error: ''
}

export const fetchFilmCasts = createAsyncThunk('casts/fetchFilmCasts', (id) => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=f88309ead70aa36df12d697b88f24280`)
            .then(response => response.json())
            .then(data => data)
            .catch(error => error.message)
})

export const casts = createSlice({
    name: 'casts',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchFilmCasts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchFilmCasts.fulfilled, (state, action) => {
            state.loading = false
            state.casts = action.payload
            state.error = ''
        })
        builder.addCase(fetchFilmCasts.rejected, (state, action) => {
            state.loading = false
            state.casts = []
            state.error = action.payload
        })
    }
})

export const selectCasts = state => state.casts.casts

export default casts.reducer