import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import './sub2.css'
const Sub2 = () => {
  return (
    <div className='Box'>
        <div className="Sub2">
            <>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={50}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src="..\images\team\main.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="..\images\team\" alt="" /></SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </>
        </div>
    </div>
  )
}

export default Sub2