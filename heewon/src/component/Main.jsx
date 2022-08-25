import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";

import Background from './Wave/Background';
import Sub0 from "./Sub0";
import Sub1 from './Sub1';
import Sub2 from './Sub2';
import Sub3 from "./Sub3";
import { useState } from "react";

const Main = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [active, setActive] = useState(null);
  const ActiveIndex=()=>{
    setActive(swiperRef.activeIndex)
  }
  return (
    <div className='container'>
      <Background/>
      <div className="Box">
        <Swiper onScroll={()=>ActiveIndex()}
          onSwiper={setSwiperRef}
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={50}
          keyboard={{
            enabled: true,
          }}
          mousewheel={true}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
          
        >
          <SwiperSlide><Sub0 active={active} /></SwiperSlide>
          <SwiperSlide><Sub1 active={active} /></SwiperSlide>
          <SwiperSlide><Sub2 active={active} /></SwiperSlide>
          <SwiperSlide><Sub3 active={active} /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Main