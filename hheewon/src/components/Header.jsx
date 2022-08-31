import React from 'react'
import $ from "jquery";
import './header.css'
import { Link } from 'react-scroll';

const Header = () => {
  const click = (e) => {
    $('div').removeClass('Active');
    $(e).addClass('Active');
  }

  return (
    <div className='HeaderBox' data-aos="fade-down">
        <div className='Header'>
          <Link to='HomeContainer' offset={-5000} onClick={()=>{click('#Home')}}><div id='Home' className='Active'>Home</div></Link>
          <Link to='TeamContainer' offset={-100} onClick={()=>{click('#Team')}}><div id='Team'>Team</div></Link>
          <Link to='WDContainer' offset={-100} onClick={()=>{click('#WD')}}><div id='WD'>Web</div></Link>
          <Link to='AppContainer' offset={-100} onClick={()=>{click('#WeatherApp')}}><div id='WeatherApp'>App</div></Link>
          <Link to='ReactContainer' offset={-100} onClick={()=>{click('#React')}}><div id='React'>React</div></Link>
        </div>
    </div>
  )
}

export default Header