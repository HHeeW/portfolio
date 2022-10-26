import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import LinkIcon from '@mui/icons-material/Link';
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
                            <img src="..\img\team\main.png" alt="main" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="..\img\team\movie.png" alt="movie" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="..\img\team\info.png" alt="info" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="..\img\team\ticket.png" alt="ticket" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="..\img\team\shop.png" alt="shop" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="..\img\team\event.png" alt="event" />
                        </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className='TeamTextBox' data-aos="fade-left">
                    <p className='TeamText'>
                        • React, ES6를 활용한 영화 정보 UI<br/>
                        • 영화 목록 정렬<br/>
                        • 영화 이름(한글/영어) 검색<br/>
                        • Iframe, Swiper 등 사용<br/>
                        • React Hook, Router
                    </p>
                    <div className='BtnBox'>
                        {ViewPort ? 
                            <Button variant="contained" href="https://hwangheewon.github.io" target="_blank" endIcon={<LinkIcon />} >사이트</Button>:
                            <Button variant="contained" disabled target="_blank" endIcon={<LinkIcon />} >웹 전용</Button>
                        }
                        <Button variant="contained" href="https://github.com/HHeeW/CHK_Movie" target="_blank" endIcon={<CodeIcon />}>코드</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team