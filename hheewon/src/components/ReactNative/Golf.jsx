import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGolfBallTee } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './golf.css'

const Golf = () => {
  return (
    <div className='GolfContainer'>
        <h1 className='text-center mb-5'data-aos="flip-down">골프앱<FontAwesomeIcon icon={faGolfBallTee} className="ps-3"/></h1>
        <div className='GolfBrick'>
            <div className='GolfSlider' data-aos="flip-down">
              <div className='GolfSwiper'>
                <Swiper
                    direction={"horizontal"}
                    slidesPerView={1}
                    spaceBetween={0}
                    autoHeight={true}
                    autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                  <SwiperSlide>
                      <img src="\img\golf\golf001.png" alt="golf01" />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src="\img\golf\golf002.png" alt="golf02" />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src="\img\golf\golf003.png" alt="golf03" />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src="\img\golf\golf004.png" alt="golf04" />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src="\img\golf\golf005.png" alt="golf05" />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src="\img\golf\golf006.png" alt="golf06" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className='GolfInfo'>
                <p>
                  • 골프 부킹앱<br/>
                  • React Native<br/>
                  • ES6<br/>
                  • FireBase Authentication <br/>
                  • FireBase Storage<br/>
                </p>
                <div className='BtnBox'>
                  <Button variant="contained" href="https://github.com/HHeeW/work/tree/main/App/React_Native/golfApp" target="_blank" endIcon={<CodeIcon />}>코드</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Golf