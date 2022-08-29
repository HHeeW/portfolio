import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Blog = () => {
  return (
    <div className='WDBrick'>
        <h1 className='text-center mb-5'data-aos="flip-down">블로그</h1>
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
                            <img src="..\img\html\my_First_site.png" alt="blog" />
                        </a>
                    </SwiperSlide>
                  <SwiperSlide>
                      <a href="http://localhost:3001/" target={'_blank'} rel='noopener noreferrer'>
                          <img src="..\img\html\blog01.jpg" alt="blog" />
                      </a>
                  </SwiperSlide>
                  <SwiperSlide>
                      <a href="http://localhost:3001/movie" target={'_blank'} rel='noopener noreferrer'>
                          <img src="..\img\html\blog02.jpg" alt="bloge" />
                      </a>
                  </SwiperSlide>
                  <SwiperSlide>
                      <a href="http://localhost:3001/Movie_Page_List/1" target={'_blank'} rel='noopener noreferrer'>
                          <img src="..\img\html\blog03.jpg" alt="blog" />
                      </a>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Blog