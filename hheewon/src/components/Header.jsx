import React from 'react'
import $ from "jquery";
import './header.css'

const Header = () => {

    $(document).on('click', '#HeaderText',function(){
      $('p').removeClass('Active');
      $(this).addClass('Active');
    })

  return (
    <div className='HeaderBox' data-aos="fade-down">
        <div className='Header'>
            <p id='HeaderText' className='Active'>Home</p>
            <p id='HeaderText'>Team</p>
            <p id='HeaderText'>React</p>
            <p id='HeaderText'>App</p>
            <p id='HeaderText'>Web</p>
        </div>
    </div>
  )
}

export default Header