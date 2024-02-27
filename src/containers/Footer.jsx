import heart from '../assets/heart.png'

export const Footer = () => {
    return <div className="text-white text-center h-[50px] text-[15px] leading-[50px] 
    bg-[#05091C] flex items-center justify-center">
        Make with <img src={heart} alt="" /> by Jospin Ndagano &copy; 2024
    </div>
}