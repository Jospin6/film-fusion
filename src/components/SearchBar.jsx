import { Input } from './Input';
import PropTypes from 'prop-types';
import {queryField, setQuery} from '../slices/searchFilm'
import {useSelector, useDispatch} from 'react-redux'

export const SearchBar = ({placeholder, close}) => {
    const inputValue = useSelector(queryField)
    const dispatch = useDispatch()

    const handleChange = (e) => dispatch(setQuery(e.target.value))

    return <div className="text-gray-500 h-[40px] border-b-[1px] 
    border-gray-300 px-[10px] md:px-[30px] 
    leading-[40px] flex justify-between overflow-hidden">
        <div className='w-[95%]'> 
            <Input onChange={handleChange} search={inputValue} placeholder={placeholder}/> 
        </div>
        <div className='w-[5%] text-end'> 
            <button className='cursor-pointer text-[20px] px-4' >
                { close }
            </button>
        </div>
    </div>

};


SearchBar.propTypes = {
    close: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
}
