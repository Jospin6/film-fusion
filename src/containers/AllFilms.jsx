import { FilmItem } from "../components/FilmItem";
import { useSelector, useDispatch } from 'react-redux'
import { fetchFilms, selectFilms, selectPage } from '../slices/films'
import { useEffect } from "react";

export const AllFilms = () => {
    const fimls = useSelector(selectFilms)
    const page = useSelector(selectPage)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFilms(page))
    }, [dispatch, page])

    const handlePageChange = newPage => {
        dispatch(fetchFilms(newPage))
    }

    return (
        <div className="order-2 md:order-1 grid grid-cols-4 gap-2 px-2 md:px-0 md:grid-cols-8 md:gap-4 h-auto md:col-span-6 pt-4">
            {fimls.films.map(film => (
                <FilmItem film={film} key={film.id}/>
            ))}
            <div className="flex justify-center">
                <button className="mr-4" onClick={() => handlePageChange(page - 1)}>Prev</button>
                <button onClick={() => handlePageChange(page + 1)}>Next</button>
            </div>
        </div>
    )
}