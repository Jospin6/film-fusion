import PropTypes from 'prop-types';

export const Input = (props) => {
    const {onChange, placeholder, search} = props;

    return <div>
        <input type="text" name={search} value={search} onChange={onChange} placeholder={placeholder}
        className='h-[35px] w-[100%] outline-none'
        />
    </div>
}

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    search: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
}
