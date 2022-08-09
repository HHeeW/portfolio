import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './sub2.css'
const Sub2 = () => {
  return (
    <div className='Box'>
        <div className="Sub2" data-aos="fade-up">
            <div className="TopText">
                <p>1. 팀프로젝트</p>
                <p>(영화 사이트)</p>
            </div> 
            <Swiper
                slidesPerView={3}
                spaceBetween={0}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Navigation, Pagination]}
                    className="mySwiper"
            >
                <SwiperSlide><a href="http://localhost:3001/" target={'_blank'} rel='noopener noreferrer'><img src="..\images\team\main.png" alt="main" /></a></SwiperSlide>
                <SwiperSlide><a href="http://localhost:3001/movie" target={'_blank'} rel='noopener noreferrer'><img src="..\images\team\movie.png" alt="movie" /></a></SwiperSlide>
                <SwiperSlide><a href="http://localhost:3001/Movie_Page_List/1" target={'_blank'} rel='noopener noreferrer'><img src="..\images\team\info.png" alt="info" /></a></SwiperSlide>
                <SwiperSlide><a href="http://localhost:3001/ticket" target={'_blank'} rel='noopener noreferrer'><img src="..\images\team\ticket.png" alt="ticket" /></a></SwiperSlide>
                <SwiperSlide><a href="http://localhost:3001/giftshop" target={'_blank'} rel='noopener noreferrer'><img src="..\images\team\shop.png" alt="shop" /></a></SwiperSlide>
                <SwiperSlide><a href="http://localhost:3001/reserve" target={'_blank'} rel='noopener noreferrer'><img src="..\images\team\event.png" alt="event" /></a></SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default Sub2