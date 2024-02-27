import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    films: [],
    page: 1,
    total_pages: 1,
    gender: '',
    errors: '',
}

export const fetchFilms = createAsyncThunk('films/fetchFilms', async ({gender,page}) => {
    let url = gender ? 
    `https://api.themoviedb.org/3/discover/movie?api_key=f88309ead70aa36df12d697b88f24280&with_genres=${gender}&page=${page}`
    : `https://api.themoviedb.org/3/discover/movie?api_key=f88309ead70aa36df12d697b88f24280&page=${page}`
    return await fetch(url)
            .then(response => response.json())
            .then(data => data)
            .catch(error => error.message)
})

export const films = createSlice({
    name: 'films',
    initialState,
    reducers: {
        setGender: (state, action) => {
            state.gender = action.payload
        }
    },
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
export const selectgender = (state) => state.films.gender
export const { setGender } = films.actions;

export default films.reducer