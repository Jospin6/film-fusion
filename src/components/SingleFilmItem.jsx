import { useEffect } from 'react'
import { percentageConverter } from '../helpers/index'
import {useDispatch, useSelector} from 'react-redux'

export const SingleFilmItem = (props) => {
    const {posterImage, genres, film} = props
    const vote_average = percentageConverter(film.vote_average).concat("%")

    const percentageStyle = {
        width: `${vote_average}`,
    } 

    return <div className="grid grid-cols-8 gap-4">
        <div className="col-span-2 h-[75vh] rounded-lg">
            <img src={posterImage} className="h-[75vh] rounded-lg" alt={film.title} />
        </div>
        <div className="col-span-6 text-white">
            <h1 className="text-[30px] pt-[50px] font-bold">{film.title}</h1>
            <div className='text-gray-300 text-[14px]'> 
                <span className='pr-2'>{film.release_date}</span> 
                <span>{genres.map(gender => <span key={gender.id}> {gender.name} </span>)} </span>
            </div>
            <div className='mt-4'>
                <div className='w-[100px]'>
                    <span className='text-[25px]'>{vote_average}</span>
                    <span className='pl-2 text-[14px] font-bold'>Score</span>
                    <div className='w-full h-[5px] rounded-full bg-gray-600'>
                        <div className='bg-yellow-500 h-[5px] rounded-full' style={percentageStyle}></div>
                    </div>
                </div>
                <div className='mt-6'>
                    <div className='text-[20px]'>Synopsis</div>
                    <div className='text-gray-300 text-[14px] pt-[10px]'> {film.overview} </div>
                </div>
                <div className='mt-6'>
                    <div className='text-[20px]'>Casts</div>
                </div>
            </div>
        </div>
    </div>
}