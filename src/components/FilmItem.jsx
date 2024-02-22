
export const FilmItem = props => {
    const {film} = props
    const baseUrl = 'https://image.tmdb.org/t/p/w500/'
    const imgUrl = `${baseUrl}${film.poster_path}`

    const percentageConverter = value => {
        const percentage = (value * 10).toFixed(1)
        return `${percentage}%`
    }

    let filmTitle = film.title.length < 30 ? film.title : film.title.substring(0, 30).concat("...")
    return <div className="col-span-2 mb-2 md:mb-0 rounded-lg itemShadow">
        <div className="w-full h-[200px] bg-red-400 rounded-t-lg relative">
            <img src={imgUrl} alt={film.title} className="w-full h-[200px] rounded-t-lg" />
            <div className="absolute text-[13px] top-[5px] left-[5px] w-[40px] h-[40px] text-white 
            rounded-full filmsVote_averageOpacity leading-[40px] text-center ">
                {percentageConverter(film.vote_average)}
            </div>
        </div>
        <div className="w-full h-[100px] px-2 pt-2 rounded-b-lg">
            <div className="font-bold"> { filmTitle } </div>
            <div className="text-gray-500 pt-2"> {film.release_date} </div>
        </div>
    </div>
}