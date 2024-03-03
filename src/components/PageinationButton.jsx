

export const PaginationButton = ({onClick, text}) => {
    return <button className="px-4 border-2 border-gray-300 rounded-lg mr-4 
    hover:bg-gray-300 text-gray-700 hover:transform hover:scale-1" 
    onClick={onClick}>
        {text}
    </button>
} 