import { useEffect, useState } from "react"
import search from "../assets/search.png"
import Close from "../assets/Close.png"
import { SearchBar } from "./SearchBar"
import { Link } from 'react-router-dom'
import {checkHidden, setHidden, queryField, fetchSearchFilm,setQuery, searchedFilm} from '../slices/searchFilm'
import {useSelector, useDispatch} from 'react-redux'
import { SearchedFilm } from "./SearchedFilmsItems"

export function NavBar () {
    const isHidden = useSelector(checkHidden)
    const searchedValue = useSelector(queryField)
    const films = useSelector(searchedFilm)
    const dispatch = useDispatch()
    
    const hideSearchbar = () => {
        dispatch(setHidden(!isHidden))
        dispatch(setQuery(''))
    }


    useEffect(() => {
        if (searchedValue !== '') {
            dispatch(fetchSearchFilm(searchedValue))
        }
    }, [searchedValue])

    return <div>
        <div className="w-full h-[80px] flex justify-between border-b-[1px] border-gray-300 px-[20px] md:px-[50px]">
            <div className="text-[#FF1E27] leading-[80px] text-[20px] md:text-[35px] cascadia">
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
        {films && <SearchedFilm films={films}/>}
    </div>
}