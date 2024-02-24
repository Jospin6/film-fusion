import {configureStore} from '@reduxjs/toolkit'
import { filmsgenders } from './filmsGenders'
import {films} from './films'
import { filmDetails } from './singleFilm'
import {casts} from './filmCats'

export const store = configureStore({
    reducer: {
        genders: filmsgenders.reducer,
        films: films.reducer,
        film: filmDetails.reducer,
        casts: casts.reducer
    }
})

export default store