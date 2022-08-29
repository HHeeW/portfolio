import React from 'react'
import $ from "jquery";
import './header.css'

const Header = () => {

    $(document).on('click', '#HeaderText',function(){
      $('li').removeClass('Active');
      $(this).addClass('Active');
    })

  return (
    <div className='HeaderBox' data-aos="fade-down">
        <ul className='Header'>
            <li id='HeaderText' className='Active'>Home</li>
            <li id='HeaderText'>Team</li>
            <li id='HeaderText'>React</li>
            <li id='HeaderText'>App</li>
            <li id='HeaderText'>Web</li>
        </ul>
    </div>
  )
}

export default Header