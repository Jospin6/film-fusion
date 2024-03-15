import { Link } from 'react-router-dom'
import { SearchedItem } from './SearchedItem'

export const SearchedFilm = (props) => {
    const {films} = props
    return <div className="w-full h-auto py-2">
        {films.map(film => 
            (
                <Link
                to={`/singleFilm/:${film.id}`} key={film.id}>
                    <SearchedItem film={film}/>
                </Link>
            )
        )

        }
    </div>
}