import { percentageConverter } from '../helpers/index'

export const SingleFilmItem = (props) => {
    const {posterImage, film} = props
    return <div className="grid grid-cols-8 gap-4">
        <div className="col-span-2 h-[75vh] rounded-lg">
            <img src={posterImage} className="h-[75vh] rounded-lg" alt={film.title} />
        </div>
        <div className="col-span-6 text-white">
            <h1 className="text-[40px] font-bold">{film.title}</h1>
            <div className='text-gray-300'> 
                <span className='pr-2'>{film.release_date}</span> 
                {/* <span>{film.genres.map(gender => <span> {gender.name} </span>)} </span>  */}
            </div>
            <div className='mt-4'>
                <div>
                    <span className='text-[25px]'>{percentageConverter(film.vote_average).concat("%")}</span>
                    <span className='pl-2 text-[15px] font-bold'>Score</span>
                </div>
                <div className='mt-6 text-[25px]'>Synopsis</div>
                <div className='text-gray-300'> {film.overview} </div>
            </div>
        </div>
    </div>
}