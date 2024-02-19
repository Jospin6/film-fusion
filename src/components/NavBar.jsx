import { useState } from "react";
import search from "../assets/search.png";
import Close from "../assets/Close.png";
import { SearchBar } from "./SearchBar";

export function NavBar () {
    const [isHidden, setHidden] = useState(true)
    
    const hideSearchbar = () => {
        setHidden(!isHidden)
    }

    return <div>
        <div className="w-full h-[80px] flex justify-between border-b-[1px] border-[#3B3B3B] px-[50px]">
            <div className="text-white leading-[80px] text-[25px]">filmFusion</div>
            <div className="h-[80px] flex items-center justify-center">
                {isHidden 
                    ? <img src={search} onClick={hideSearchbar} className="cursor-pointer" alt="Search" />
                    : <img src={Close} onClick={hideSearchbar} className="cursor-pointer" alt="Close" />
                }
            </div>
        </div>
        {!isHidden && <SearchBar search="Search..." close="x"/>}
    </div>
}