import React from 'react'
import './home.css'
import Skill from './Skill'
import './Weather/Weather'
const Home = () => {
  return (
    <div className='HomeContainer' data-aos="fade-up">
      <div className='WellcomBox'>
        <div id="city"></div>
        <div id='IconBox'><img id='icon' src="./img/01d.svg" alt="날씨" /></div>
        <div id="nowtemp"></div>
        <strong className='HomeText HomeText1' 
                data-aos="fade-right"> WELLCOME TO </strong>
        <strong className='HomeText HomeText2' 
                data-aos="fade-left"> PORTFOLIO </strong>
      </div>
      <Skill/>
    </div>
  )
}

export default Home