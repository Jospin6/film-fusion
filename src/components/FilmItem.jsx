import {percentageConverter} from '../helpers/index'

export const FilmItem = props => {
    const {film} = props
    const imgUrl = `https://image.tmdb.org/t/p/w500/${film.poster_path}`
    const filmTitle = film.title.length < 20 ? film.title : film.title.substring(0, 20).concat("...")


    return <div className="col-span-2 mb-2 md:mb-0 rounded-lg itemShadow">
        <div className="w-full h-[200px] bg-red-400 rounded-t-lg relative">
            <img src={imgUrl} alt={film.title} className="w-full h-[200px] rounded-t-lg" />
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