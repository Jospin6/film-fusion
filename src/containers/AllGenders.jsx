import {connect, useDispatch, useSelector} from 'react-redux'
import { fetchFilmsGenders } from '../slices/filmsGenders'
import { useEffect } from 'react'
import { GenderItem } from '../components/GenderItem'
import { Link } from 'react-router-dom'

export const AllGenders = () => {
    const genders = useSelector((state) => state.genders)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFilmsGenders())
    },[])


    return (
        <div className="order-1 md:order-2 h-auto md:col-span-2 pr-4 md:pt-[20px] flex 
        overflow-y-hidden overflow-x-auto md:overflow-hidden scrollbar-thin scrollbar-thumb-gray-300 
        scrollbar-track-transparent md:block">
            <div className='text-[30px] hidden md:block'>
                Genders
            </div>
            {
                genders.genders.map(gender => 
                    <GenderItem itemName={gender.name} key={gender.id}/> 
                )
            }
        </div>
    )
}


