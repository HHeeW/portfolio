import React, { useState } from 'react'
import './home.css'
import Skill from './Skill'
import '../Weather/Weather'
import $ from 'jquery'
const Home = () => {
  const media= (window.matchMedia('(max-width: 500px)').matches);
  const [scroll, setScroll] = useState(true);
  $(document).on('scroll' , function () {
    let height = $(document).scrollTop();
    height >= 150 ? setScroll(false) : setScroll(true);
    // console.log(height);	// 스크롤할때마다 해당 스크롤 위치 좌표값(높이)
    // console.log(scroll);
  });
  return (
    <div className='HomeContainer' data-aos={media===true ? "": "fade-left"}>
      <div className='WellcomBox'>
        <div id="City"></div>
        <div id='WeatherBox'><img id='Weather' src="./img/weather/01d.svg" alt="날씨" /></div>
        <div id="Nowtemp"></div>
        <strong className='HomeText HomeText1' 
                data-aos={media===true ? "fade-right": "fade-left"}> WELLCOME TO </strong>
        <strong className='HomeText HomeText2' 
                data-aos="fade-left"> PORTFOLIO </strong>
        <div className='ScrollImgBox'>
          {scroll ? <img src="./img/scroll.gif" alt="스크롤이미지" className='ScrollImg' />: ''}
        </div>
        
      </div>
      <Skill/>
    </div>
  )
}

export default Home