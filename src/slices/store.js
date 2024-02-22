import {configureStore} from '@reduxjs/toolkit'
import { filmsgenders } from './filmsGenders'
import {films} from './films'

export const store = configureStore({
    reducer: {
        genders: filmsgenders.reducer,
        films: films.reducer
    }
})

export default store