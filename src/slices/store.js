import {configureStore} from '@reduxjs/toolkit'
import { filmsgenders } from './filmsGenders'
import {films} from './films'
import { filmDetails } from './singleFilm'
import {cast} from './casting'

export const store = configureStore({
    reducer: {
        genders: filmsgenders.reducer,
        films: films.reducer,
        film: filmDetails.reducer,
        cast: cast.reducer
    }
})

export default store