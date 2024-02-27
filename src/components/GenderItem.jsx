
export const GenderItem = props => {
    const {itemName, onclick, isSelected} = props
    const classAtributes = `w-full h-[40px] pl-4 
    cursor-pointer md:mb-[5px] leading-[40px] text-[16px]
    md:hover:border-r-2 md:hover:border-red-500 hover:text-black hover:font-bold
    md:hover:itemShadow rounded-lg md:ml-2`
    return <div className={
        isSelected ? 
        classAtributes.concat(` text-black font-bold md:border-r-2 border-red-500 md:itemShadow`) 
        : classAtributes.concat(` text-gray-600`) 
        } 
        onClick={onclick}>
        {itemName}
    </div>
}