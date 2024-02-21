import {configureStore} from '@reduxjs/toolkit'
import { filmsgenders } from './filmsGenders'

export const store = configureStore({
    reducer: {
        genders: filmsgenders.reducer
    }
})

export default store