import { useParams } from 'react-router-dom';
import { fetchFilmDetails, selectFilm } from '../slices/singleFilm'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import { imageUrl } from '../helpers/index'

export const SingleFilm = () => {
    const {id} =  useParams();
    const film = useSelector(selectFilm)
    const dispatch = useDispatch()
    const backdropImage = imageUrl(film.backdrop_path)
    const posterImage = imageUrl(film.poster_path)

    useEffect(() => {
        dispatch(fetchFilmDetails(id))
    })

    const backgroundImage = {
        backgroundImage: `url(${backdropImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat", 
    }
    return <div>
        <div className="w-full h-[80vh] relative" style={backgroundImage}>
            <div className="w-full h-full absolute top-0 left-0 backdropOpacity">
                
            </div>
            <div>{id}</div>
        </div>
        <div>cast</div>
    </div>
}