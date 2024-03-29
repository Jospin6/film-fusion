import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {API_KEY} from '../helpers/index'

const initialState = {
    loading: false,
    cast: [],
    error: '',
}

export const fetchCast = createAsyncThunk('cast/fetchCast', async (id) => {
    return await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(data => data)
            .catch(error => error.message)
})

export const cast = createSlice({
    name: 'cast',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCast.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchCast.fulfilled, (state, action) => {
            state.loading = false
            state.cast = action.payload.cast
            state.error = ''
        })
        builder.addCase(fetchCast.rejected, (state, action) => {
            state.loading = false
            state.cast = []
            state.error = action.payload
        })
    }
})

export const selectCast = state => state.cast.cast

export default cast.reducer