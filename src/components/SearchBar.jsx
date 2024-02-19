import { useState } from 'react';
import { Input } from './Input';
import PropTypes from 'prop-types';

export const SearchBar = ({placeholder, close}) => {

    const [search, setSearch] = useState('');
    const handleChange = (e) => setSearch(e.target.value);
    const resetSearch = () => setSearch('');

    return <div className="text-gray-500 h-[40px] border-b-[1px] border-gray-300 px-[10px] md:px-[30px] 
    leading-[40px] flex justify-between overflow-hidden">
        <div className='w-[95%]'> <Input onChange={handleChange} search={search} placeholder={placeholder}/> </div>
        <div className='w-[5%] text-end'> <button className='cursor-pointer text-[20px] px-4' onClick={resetSearch}>{ close }</button> </div>
    </div>

};


SearchBar.propTypes = {
    search: PropTypes.string.isRequired,
    close: PropTypes.string.isRequired
}
