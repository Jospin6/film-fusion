import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'


const initialState = {
    loading: false,
    genders: [],
    erros: '',
}

export const fetchFilmsGenders = createAsyncThunk('genders/fetchFilmsGenders', () => {
    return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=f88309ead70aa36df12d697b88f24280`)
            .then(response => response.json())
            .then(response => response.genres)
            .catch(error => error.message)
})

export const filmsgenders = createSlice({
    name: 'filmsgenders',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchFilmsGenders.pending, (state) => {
            state.loading = true
        })

        builder.addCase(fetchFilmsGenders.fulfilled, (state, action) => {
            state.loading = false
            state.genders = action.payload
            state.erros = ''
        })
        builder.addCase(fetchFilmsGenders.rejected, (state, action) => {
            state.loading = false
            state.genders = []
            state.erros = action.payload
        })
    }
})

export default filmsgenders.reducer
