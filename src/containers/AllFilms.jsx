import { FilmItem } from "../components/FilmItem";
import { useSelector, useDispatch } from 'react-redux'
import { fetchFilms, selectFilms, selectPage, selectTotalPage} from '../slices/films'
import { useEffect } from "react";
import { PaginationButton } from "../components/PageinationButton";

export const AllFilms = () => {

    const films = useSelector(selectFilms)
    const currentPage = useSelector(selectPage)
    const totalPages = useSelector(selectTotalPage)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFilms(currentPage))
    }, [currentPage])

    const handleNextPage = () => {
        currentPage < totalPages && dispatch(fetchFilms(currentPage + 1))
    };

    const handlePrevPage = () => {
        currentPage > 1 && dispatch(fetchFilms(currentPage - 1))
    };

    return (
        <div className="order-2 md:order-1 md:col-span-6">
            <div className=" grid grid-cols-4 gap-2 px-2 
            md:px-0 md:grid-cols-8 md:gap-4 h-auto pt-4"> 
                {films.map(film => (
                    <FilmItem film={film} key={film.id}/>
                ))}
            </div>
            <div className="w-full flex justify-center py-4">
                <PaginationButton onClick={handlePrevPage} text="<< Pev"  />
                <PaginationButton onClick={handleNextPage} text="Next >>" />
            </div>
        </div>
    )
}