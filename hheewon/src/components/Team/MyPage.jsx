import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MyPage = ({ViewPort}) => {
  console.log(ViewPort)
  return (
    <>
      <h1 className='text-center mb-5'data-aos="flip-down">개인 디자인<FontAwesomeIcon icon={faUser} className="ps-3" /></h1>
      <div className='TeamBox'>
        <div className='TeamSlider' data-aos="fade-right">
          <div className='TeamSwiper'>
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              autoHeight={true}
              pagination={{
              clickable: true,
              }}
              navigation={ViewPort}
              modules={[Navigation, Pagination]}
                  className="mySwiper"
            >
              <SwiperSlide>
                <img src="..\img\xd\xd-1.png" alt="main" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="..\img\xd\xd-2.png" alt="movie" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="..\img\xd\xd-3.png" alt="info" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="..\img\xd\xd-4.png" alt="ticket" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="..\img\xd\xd-5.png" alt="shop" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="..\img\xd\xd-6.png" alt="event" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className='TeamTextBox' data-aos="fade-left">
            <p className='TeamText'>
              • Adobe XD<br/>
              • Diagram
              
            </p>
        </div>
      </div>
    </>
  )
}

export default MyPage