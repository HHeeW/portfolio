import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Clone = () => {
  return (
    <div className='WDBrick'>
        <h1 className='text-center mb-5'data-aos="flip-down">클론페이지<FontAwesomeIcon icon={faClone} className="ps-3"/></h1>
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
                        <img src="..\img\html\NaverNews.png" alt="NaverNews" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="http://localhost:3001/" target={'_blank'} rel='noopener noreferrer'>
                        <img src="..\img\html\daumcafe01.jpg" alt="daumcafe" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="http://localhost:3001/movie" target={'_blank'} rel='noopener noreferrer'>
                        <img src="..\img\html\daumcafe02.jpg" alt="daumcafe" />
                    </a>
                </SwiperSlide>
                  <SwiperSlide>
                      <a href="http://localhost:3001/" target={'_blank'} rel='noopener noreferrer'>
                          <img src="..\img\html\starbucks01.jpg" alt="starbucks" />
                      </a>
                  </SwiperSlide>
                  <SwiperSlide>
                      <a href="http://localhost:3001/movie" target={'_blank'} rel='noopener noreferrer'>
                          <img src="..\img\html\starbucks02.jpg" alt="starbucks" />
                      </a>
                  </SwiperSlide>
                  <SwiperSlide>
                      <a href="http://localhost:3001/Movie_Page_List/1" target={'_blank'} rel='noopener noreferrer'>
                          <img src="..\img\html\starbucks03.jpg" alt="starbucks" />
                      </a>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Clone