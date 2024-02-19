
import PropTypes from 'prop-types';

export const SearchBar = ({search, close}) => (<div className="text-gray-500 h-[40px] border-b-[1px] border-[#3B3B3B] px-[30px] 
    leading-[40px] flex justify-between">
        <div> { search } </div>
        <div> { close } </div>
    </div>
);
SearchBar.propTypes = {
    search: PropTypes.string.isRequired,
    close: PropTypes.string.isRequired
}
