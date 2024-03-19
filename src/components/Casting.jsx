import { imageUrl } from '../helpers/index'
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export const Casting = (props) => {
    const {casts} = props

    return <Swiper 
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
            576: {
              slidesPerView: 2, 
            },
            768: {
              slidesPerView: 5,
            }
          }}
        >
        {casts.map(cast => {
            if (cast.order < 10) {
                return <SwiperSlide className='col-span-2 h-[300px] rounded-lg mr-2 
                text-[14px] itemShadow mb-4 text-black' key={cast.cast_id}>
                    <div className='w-full h-[200px]'>
                        <img src={imageUrl(cast.profile_path)} 
                        className='w-full rounded-t-lg h-[200px] object-fill' 
                        alt={cast.name} />
                    </div>
                    <div className='p-2'>
                        <div className='text-[16px] font-bold'> {cast.name} </div>
                        <div className='text-[14px] text-gray-500'> {cast.character} </div>
                    </div>
                </SwiperSlide>
            }
        })}
    </Swiper>
}