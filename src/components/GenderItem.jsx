
export const GenderItem = props => {
    const {itemName, onclick} = props
    return <div className="w-full h-[40px] text-gray-600 pl-4 
    cursor-pointer md:mb-[5px] leading-[40px] text-[16px]
    md:hover:bg-[#D5D5D5] hover:text-black hover:font-bold
    hover:rounded-tl-lg md:hover:rounded-lg" onClick={onclick}>
        {itemName}
    </div>
}