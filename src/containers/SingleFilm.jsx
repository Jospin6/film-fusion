import { useParams } from 'react-router-dom';
import { fetchFilmDetails, selectFilm, selectGenres } from '../slices/singleFilm'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import { imageUrl, backgroundImage } from '../helpers/index'
import { SingleFilmItem } from '../components/SingleFilmItem';
import {fetchCast, selectCast} from '../slices/casting'
import {Casting} from '../components/Casting'

export const SingleFilm = () => {
    const {id} =  useParams();
    const film = useSelector(selectFilm)
    const genres = useSelector(selectGenres)
    const dispatch = useDispatch()
    const posterImage = imageUrl(film.poster_path)
    const backdropImage = backgroundImage(film.backdrop_path) 
    const casts = useSelector(selectCast)
    const dispatchCast = useDispatch()

    useEffect(() => {
        dispatch(fetchFilmDetails(id))
        dispatchCast(fetchCast(id))
    }, [])

    return <div className="h-[auto] pb-[50px]">
        <div className="w-full h-[800px] md:h-[70vh] md:relative" style={backdropImage}>
            <div className="w-full h-full md:absolute md:top-0 md:left-0 md:px-6 md:pt-4 p-2 backdropOpacity">
                <SingleFilmItem posterImage={posterImage} genres={genres} film={film}/>
            </div>
        </div>
        <div className='pt-2 px-2'>
            <div className='text-[25px] py-4'>Cast</div>
            <Casting casts={casts}/>
        </div>
    </div>
}