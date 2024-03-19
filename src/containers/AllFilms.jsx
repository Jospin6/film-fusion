import { FilmItem } from "../components/FilmItem";
import { useSelector, useDispatch } from 'react-redux'
import { fetchFilms, selectFilms, selectPage, selectTotalPage, selectgender} from '../slices/films'
import { useEffect } from "react";
import { PaginationButton } from "../components/PageinationButton"
import { Link } from 'react-router-dom'

export const AllFilms = () => {

    const films = useSelector(selectFilms)
    const currentPage = useSelector(selectPage)
    const totalPages = useSelector(selectTotalPage)
    const currentGender = useSelector(selectgender)
    const dispatch = useDispatch()
    
    const handleNextPage = () => {
        currentPage < totalPages && dispatch(fetchFilms({
            gender: currentGender, 
            page: currentPage + 1
        }))
    };

    const handlePrevPage = () => {
        currentPage > 1 && dispatch(fetchFilms({
            gender: currentGender, 
            page: currentPage - 1
        }))
    };

    useEffect(() => {
        dispatch(fetchFilms({
            gender: currentGender, 
            page: currentPage
        }))
    }, [currentGender,currentPage])

    return (
        <div className="order-2 md:order-1 md:col-span-6">
            <div className=" grid grid-cols-1 px-2 
            md:px-0 md:grid-cols-6 lg:grid-cols-8 md:gap-4 h-auto pt-4"> 
                {films.map(film => (
                    <Link className="col-span-2 mb-2 md:mb-0 " to={`/singleFilm/${film.id}`} key={film.id}> 
                        <FilmItem film={film}/>
                    </Link>
                ))}
            </div>
            <div className="w-full flex justify-center py-4">
                <PaginationButton onClick={handlePrevPage} text="<< Pev"  />
                <PaginationButton onClick={handleNextPage} text="Next >>" />
            </div>
        </div>
    )
}