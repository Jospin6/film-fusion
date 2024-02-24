import { useParams } from 'react-router-dom';
import { fetchFilmDetails, selectFilm } from '../slices/singleFilm'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import { imageUrl, backgroundImage } from '../helpers/index'
import { SingleFilmItem } from './SingleFilmItem';

export const SingleFilm = () => {
    const {id} =  useParams();
    const film = useSelector(selectFilm)
    const dispatch = useDispatch()
    const posterImage = imageUrl(film.poster_path)
    const backdropImage = backgroundImage(film.backdrop_path) 

    useEffect(() => {
        dispatch(fetchFilmDetails(id))
    })

    return <div>
        <div className="w-full h-[80vh] relative" style={backdropImage}>
            <div className="w-full h-full absolute top-0 left-0 px-6 pt-4 backdropOpacity">
                <SingleFilmItem posterImage={posterImage} film={film}/>
            </div>
        </div>
        <div>cast</div>
    </div>
}