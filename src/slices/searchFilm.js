import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    films: [],
    queryField: '',
    isHidden: true,
    errors: ''
}

export const fetchSearchFilm = createAsyncThunk('search/fetchSearchFilm', async (query) => {
    return await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=f88309ead70aa36df12d697b88f24280`)
            .then(response => response.json())
            .then(data => data)
            .catch(error => error.message)
})

export const search = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setQuery: (state, action) => {
            state.queryField = action.payload
        },
        setHidden: (state, action) => {
            state.isHidden = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSearchFilm.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchSearchFilm.fulfilled, (state, action) => {
            state.loading = false
            state.films = action.payload.results
            state.errors = ''
        })
        builder.addCase(fetchSearchFilm.rejected, (state, action) => {
            state.loading = false
            state.films = []
            state.errors = action.payload
        })
    }
})

export const {setQuery, setHidden} = search.actions

export const queryField = (state) => state.search.queryField
export const checkHidden = (state) => state.search.isHidden
export const searchedFilm = (state) => state.search.films

export default search.reducer