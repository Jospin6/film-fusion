import { useDispatch, useSelector} from 'react-redux'
import { fetchFilmsGenders, setGenderId } from '../slices/filmsGenders'
import { useEffect } from 'react'
import { GenderItem } from '../components/GenderItem'
import {setGender,selectgender} from '../slices/films'

export const AllGenders = () => {
    const genders = useSelector((state) => state.genders)
    const dispatch = useDispatch()
    const handleChangeGender = (genderId) => {
        dispatch(setGender(genderId))
    }
    const selectedGender = useSelector(selectgender)

    useEffect(() => {
        dispatch(fetchFilmsGenders())
    },[])


    return (
        <div className="order-1 md:order-2 h-auto md:col-span-2 pr-4 md:pt-[20px] flex 
        overflow-y-hidden overflow-x-auto md:overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-300 
        scrollbar-track-transparent md:block">
            <div className='text-[30px] hidden md:block'>
                Genders
            </div>
            {
                genders.genders.map(gender => 
                    <GenderItem 
                        onclick={() => handleChangeGender(gender.id)}
                        itemName={gender.name} 
                        isSelected = {selectedGender === gender.id}
                        key={gender.id}/> 
                )
            }
        </div>
    )
}


