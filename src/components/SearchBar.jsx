import { Input } from './Input';
import PropTypes from 'prop-types';
import {queryField, setQuery} from '../slices/searchFilm'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react';

export const SearchBar = ({placeholder, close}) => {
    const inputValue = useSelector(queryField)
    const dispatch = useDispatch()

    const handleChange = (e) => dispatch(setQuery(e.target.value))
    const resetSearch = () => {
        dispatch(setQuery(''))
    }

    return <div className="text-gray-500 h-[40px] border-b-[1px] border-gray-300 px-[10px] md:px-[30px] 
    leading-[40px] flex justify-between overflow-hidden">
        <div className='w-[95%]'> 
            <Input onChange={handleChange} search={inputValue} placeholder={placeholder}/> 
        </div>
        <div className='w-[5%] text-end'> 
            <button className='cursor-pointer text-[20px] px-4' onClick={resetSearch}>
                { close }
            </button>
        </div>
    </div>

};


SearchBar.propTypes = {
    search: PropTypes.string.isRequired,
    close: PropTypes.string.isRequired
}
