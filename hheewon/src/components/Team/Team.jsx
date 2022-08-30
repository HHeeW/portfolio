import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './team.css'
import MyPage from './MyPage';
const Team = ({ViewPort}) => {
    ViewPort = !ViewPort
  return (
    <div className='TeamContainer'>
        <MyPage ViewPort={ViewPort}/>
        <div className='TeamBrick'>
            <h1 className='text-center mb-5'data-aos="flip-down">팀 프로젝트<FontAwesomeIcon icon={faUserGroup} className="ps-3" /></h1>
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
                        <a href="http://localhost:3001/" target={'_blank'} rel='noopener noreferrer'>
                            <img src="..\img\team\main.png" alt="main" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="http://localhost:3001/movie" target={'_blank'} rel='noopener noreferrer'>
                            <img src="..\img\team\movie.png" alt="movie" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="http://localhost:3001/Movie_Page_List/1" target={'_blank'} rel='noopener noreferrer'>
                            <img src="..\img\team\info.png" alt="info" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="http://localhost:3001/ticket" target={'_blank'} rel='noopener noreferrer'>
                            <img src="..\img\team\ticket.png" alt="ticket" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="http://localhost:3001/giftshop" target={'_blank'} rel='noopener noreferrer'>
                            <img src="..\img\team\shop.png" alt="shop" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="http://localhost:3001/reserve" target={'_blank'} rel='noopener noreferrer'>
                            <img src="..\img\team\event.png" alt="event" />
                        </a>
                    </SwiperSlide>
                    </Swiper>
                </div>
                </div>
                <div className='TeamTextBox' data-aos="fade-left">
                    <p className='TeamText'>
                    팀 프로젝트로 총 4명으로 이루어진 팀입니다.<br/>
                    영화를 좋아하는 사람들이 모여 각각의 페이지를 코딩했습니다.<br/>
                    홈 페이지는 다 같이 나누어서 만들었고 저는 홈의 상단과 영화 페이지를 만들었습니다.<br/>
                    React를 사용하여 props로 정보를 전달하여 생성하고,<br/>
                    Router를 사용하여 영화 데이터를 전달하는 방식으로 예매와 연결하였습니다.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team