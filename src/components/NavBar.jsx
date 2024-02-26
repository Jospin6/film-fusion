import { useState } from "react";
import search from "../assets/search.png";
import Close from "../assets/Close.png";
import { SearchBar } from "./SearchBar";
import { Link } from 'react-router-dom'

export function NavBar () {
    const [isHidden, setHidden] = useState(true)
    
    const hideSearchbar = () => {
        setHidden(!isHidden)
    }

    return <div>
        <div className="w-full h-[80px] flex justify-between border-b-[1px] border-gray-300 px-[20px] md:px-[50px]">
            <div className="text-[#FF1E27] leading-[80px] text-[20px] md:text-[35px] impact">
                <Link to={"/"}>filmFusion</Link>
            </div>
            <div className="h-[80px] flex items-center justify-center">
                {isHidden 
                    ? <img src={search} onClick={hideSearchbar} className="cursor-pointer xs:w-[20px]" alt="Search" />
                    : <img src={Close} onClick={hideSearchbar} className="cursor-pointer xs:w-[20px]" alt="Close" />
                }
            </div>
        </div>
        {!isHidden && <SearchBar placeholder="Search..." close="x"/>}
    </div>
}