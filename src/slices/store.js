import {configureStore} from '@reduxjs/toolkit'
import { filmsgenders } from './filmsGenders'
import {films} from './films'
import { filmDetails } from './singleFilm'
import {cast} from './casting'
import {search} from './searchFilm'

export const store = configureStore({
    reducer: {
        genders: filmsgenders.reducer,
        films: films.reducer,
        film: filmDetails.reducer,
        cast: cast.reducer,
        search: search.reducer
    }
})

export default store