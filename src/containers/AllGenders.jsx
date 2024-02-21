import {connect, useDispatch, useSelector} from 'react-redux'
import { fetchFilmsGenders } from '../slices/filmsGenders'
import { useEffect } from 'react'

export const AllGenders = () => {
    const genders = useSelector((state) => state.genders)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFilmsGenders())
    },[])

    return (
        <div className="order-1 md:order-2 h-auto md:col-span-2">
            
                
        </div>
    )
}


