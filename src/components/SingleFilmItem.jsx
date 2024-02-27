import { percentageConverter } from '../helpers/index'


export const SingleFilmItem = (props) => {
    const {posterImage, genres, film} = props
    const vote_average = percentageConverter(film.vote_average).concat("%")

    const percentageStyle = {
        width: `${vote_average}`,
    } 

    return <div className="grid grid-cols-1 md:grid-cols-8 md:gap-4">
        <div className="md:col-span-2 col-span-1 h-[65vh] rounded-lg">
            <img src={posterImage} className="md:h-[65vh] h-full w-full rounded-lg" alt={film.title} />
        </div>
        <div className="md:col-span-6 col-span-1 text-white">
            <h1 className="md:text-[30px] text-[20px] md:pt-[50px] font-bold">{film.title}</h1>
            <div className='text-gray-300 text-[14px]'> 
                <span className='pr-2'>{film.release_date}</span> 
                <span>{genres.map(gender => <span key={gender.id}> {gender.name} </span>)} </span>
            </div>
            <div className='md:mt-4 mt-2'>
                <div className='w-[100px]'>
                    <span className='md:text-[25px] text-[20px]'>{vote_average}</span>
                    <span className='pl-2 text-[14px] font-bold'>Score</span>
                    <div className='w-full h-[5px] rounded-full bg-gray-600'>
                        <div className='bg-yellow-500 h-[5px] rounded-full' style={percentageStyle}></div>
                    </div>
                </div>
                <div className='md:mt-6 mt-2'>
                    <div className='md:text-[20px] text-[16px] font-bold'>Synopsis</div>
                    <div className='text-gray-300 md:text-[14px] text-[12px] pt-[10px]'> {film.overview} </div>
                </div>
            </div>
        </div>
    </div>
}