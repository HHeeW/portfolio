import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './shopping.css'

const Shopping = () => {
  return (
    <div className='ShoppingContainer'>
        <h1 className='text-center mb-5'data-aos="flip-down">쇼핑몰<FontAwesomeIcon icon={faCartShopping} className="ps-3"/></h1>
        <div className='SHoppingBrick'>
            <div className='ShoppingSlider' data-aos="flip-down">
              <div className='ShoppingSwiper'>
                <Swiper
                    direction={"vertical"}
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
                    <img src="\img\react\shopping01.jpg" alt="shopping01" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="\img\react\shopping02.jpg" alt="shopping01" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="\img\react\shopping03.jpg" alt="shopping02" />
                </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className='ShoppingInfo'>
                <p>
                  • 쇼핑몰<br/>
                  • React<br/>
                  • JSON<br/>
                  • ES6<br/>
                </p>
                <div className='BtnBox'>
                  <Button variant="contained" href="https://github.com/HHeeW/portfolio/tree/main/shopping" target="_blank" endIcon={<CodeIcon />}>코드</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shopping