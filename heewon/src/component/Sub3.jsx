import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Sub3 = () => {
  return (
    <div className='Box'>
        <div className="Sub2" /*data-aos="fade-up"*/>
            <div className="TopText">
                <p>1. 팀프로젝트</p>
                <p>(영화 사이트)</p>
            </div>
            <div className="Sub2Box">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    autoHeight={true}
                    pagination={{
                        clickable: true,
                    }}
                    keyboard={{
                      enabled: true,
                    }}
                    navigation={true}
                    modules={[Navigation, Pagination]}
                        className="mySwiper"
                >
                    <SwiperSlide><img src="..\images\ui구현\황희원-ui구현-1.png" alt="main" /></SwiperSlide>
                    <SwiperSlide><img src="..\images\ui구현\황희원-ui구현-2.png" alt="movie" /></SwiperSlide>
                    <SwiperSlide><img src="..\images\ui구현\황희원-ui구현-3.png" alt="info" /></SwiperSlide>
                    <SwiperSlide><img src="..\images\ui구현\황희원-ui구현-4.png" alt="ticket" /></SwiperSlide>
                    <SwiperSlide><img src="..\images\ui구현\황희원-ui구현-5.png" alt="shop" /></SwiperSlide>
                    <SwiperSlide><img src="..\images\ui구현\황희원-ui구현-6.png" alt="event" /></SwiperSlide>
                </Swiper>
                <div className="Sub2BoxInfo">
                    설명
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sub3