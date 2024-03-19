import {percentageConverter, imageUrl, filmTitleLength} from '../helpers/index'

export const FilmItem = props => {
    const {film} = props
    const imgUrl = imageUrl(film.poster_path)
    const filmTitle = filmTitleLength(film.title) 


    return <div className="rounded-lg itemShadow">
        <div className="w-full h-[200px] rounded-t-lg relative">
            <img src={imgUrl} alt={film.title} className="w-full h-[200px] rounded-t-lg object-cover" />
            <div className="absolute text-[12px] top-[5px] left-[5px] w-[40px] h-[40px] text-white 
                rounded-full filmsVote_averageOpacity font-bold leading-[40px] text-center ">
                {percentageConverter(film.vote_average).concat("%")}
            </div>
        </div>
        <div className="w-full h-[100px] px-2 pt-2 rounded-b-lg">
            <div className="font-bold"> 
                { filmTitle } 
            </div>
            <div className="text-gray-500 pt-2"> 
                {film.release_date} 
            </div>
        </div>
    </div>
}