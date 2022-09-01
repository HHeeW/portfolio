import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
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
                    // direction={"vertical"}
                    slidesPerView={1}
                    spaceBetween={0}
                    autoHeight={true}
                    loop={true}
                    pagination={{
                    clickable: true,
                    }}
                    autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                <SwiperSlide>
                    <a href="\client\HTML\HNews\HNews.html" target={'_blank'} rel='noopener noreferrer'>
                        <img src="..\img\html\NaverNews.png" alt="NaverNews" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="\client\HTML\doumcafe\index.html" target={'_blank'} rel='noopener noreferrer'>
                        <img src="..\img\html\daumcafe01.jpg" alt="daumcafe" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="\client\HTML\doumcafe\index.html" target={'_blank'} rel='noopener noreferrer'>
                        <img src="..\img\html\daumcafe02.jpg" alt="daumcafe" />
                    </a>
                </SwiperSlide>
                  <SwiperSlide>
                      <a href="\client\HTML\MoonBucks\index.html" target={'_blank'} rel='noopener noreferrer'>
                          <img src="..\img\html\starbucks01.jpg" alt="starbucks" />
                      </a>
                  </SwiperSlide>
                  <SwiperSlide>
                      <a href="\client\HTML\MoonBucks\index.html" target={'_blank'} rel='noopener noreferrer'>
                          <img src="..\img\html\starbucks02.jpg" alt="starbucks" />
                      </a>
                  </SwiperSlide>
                  <SwiperSlide>
                      <a href="\client\HTML\MoonBucks\index.html" target={'_blank'} rel='noopener noreferrer'>
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