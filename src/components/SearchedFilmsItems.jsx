import {imageUrl, longText, emptyArray} from '../helpers/index'
import { Link } from 'react-router-dom'

export const SearchedFilm = (props) => {
    const {films} = props
    const makeArrayEmpty = () => emptyArray(films)
    return <div className="w-full h-auto py-2">
        {films.map(film => 
            (
                <Link onClick={makeArrayEmpty()}
                className="h-[150px] rounded-lg mb-4 itemShadow flex mx-4"
                to={`/singleFilm/${film.id}`} key={film.id}>
                    <div className="h-full w-[100px] rounded-l-lg">
                        <img src={imageUrl(film.poster_path)} alt={film.title} className='h-full w-[100px] rounded-l-lg' />
                    </div>
                    <div className='px-4 pt-2'>
                        <div className='md:text-[20px] text-[18px] font-bold'> {film.title} </div>
                        <div className='text-gray-500 md:text-[15px] text-[12px]'> {film.release_date} </div>
                        <div className='md:text-[15px] text-[12px] pt-4'> {longText(film.overview)} </div>
                    </div>
                </Link>
            )
        )

        }
    </div>
}