import { useState } from "react";
import search from "../assets/search.png";
import Close from "../assets/Close.png";
import { SearchBar } from "./SearchBar";

export function NavBar () {
    const [isHidden, setHidden] = useState(false)
    
    const hideSearchbar = () => {
        setHidden(!isHidden)
    }

    return <div>
        <div className="w-full h-[80px] flex justify-between border-b-[1px] border-[#3B3B3B] px-[50px]">
            <div className="text-white leading-[80px] text-[25px]">filmFusion</div>
            <div className="h-[80px] flex items-center justify-center">
                {isHidden 
                    ? <img src={search} onClick={hideSearchbar} alt="Search" />
                    : <img src={Close} onClick={hideSearchbar} alt="Close" />
                }
            </div>
        </div>
        {!isHidden && <SearchBar hidden/>}
    </div>
}