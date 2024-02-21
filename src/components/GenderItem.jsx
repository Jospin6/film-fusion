
export const GenderItem = props => {
    const {itemName} = props
    return <div className="w-full h-[40px] text-gray-600 pl-4 md:hover:border-r-2 
    md:hover:border-red-400 cursor-pointer md:mb-[5px] leading-[40px] text-[16px]
    md:hover:bg-[#F1F1F1] hover:text-[#FF1E27] md:hover:text-gray-600 
    hover:rounded-tl-lg md:hover:rounded-bl-lg">
        {itemName}
    </div>
}