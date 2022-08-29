import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './webdesgin.css'
import Blog from './Blog';
import Clone from './Clone';
const WebDesgin = () => {
  return (
    <div className='WDContainer'>
        <div className='WDBrick'>
        <h1 className='text-center mb-5'data-aos="flip-down">웹 디자인<FontAwesomeIcon icon={faCode} className="ps-3" /></h1>
            <div className='WDBox'>
                <div className='WDSlider' data-aos="flip-down">
                <div className='WDSwiper'>
                    <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    autoHeight={true}
                    pagination={{
                    clickable: true,
                    }}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay,Navigation, Pagination]}
                        className="mySwiper"
                    >
                    <SwiperSlide>
                        <a href="http://localhost:3001/" target={'_blank'} rel='noopener noreferrer'>
                            <img src="..\img\html\webdesign01.png" alt="웹디자인" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="http://localhost:3001/movie" target={'_blank'} rel='noopener noreferrer'>
                            <img src="..\img\html\webdesign02.png" alt="웹디자인e" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="http://localhost:3001/Movie_Page_List/1" target={'_blank'} rel='noopener noreferrer'>
                            <img src="..\img\html\webdesign03.png" alt="웹디자인" />
                        </a>
                    </SwiperSlide>
                    </Swiper>
                </div>
                </div>
            </div>
        </div>
        <Blog/>
        <Clone/>
    </div>
  )
}

export default WebDesgin