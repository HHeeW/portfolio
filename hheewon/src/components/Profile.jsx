import React from 'react'
import './profile.css'
import $ from "jquery";
const Profile = () => {

    $(document).on('mouseover', '#Name', ()=>{
        $('#Name').text('HwangHeeWon')
    })
    $(document).on('mouseleave', '#Name', ()=>{
        $('#Name').text('황희원')
    })

  return (
    <div className='ProfileBox' data-aos="fade-right">
        <div className='PhotoBox'>
            <div className='Photo'>
                <img src="./img/HwangHeeWon.jpg" alt="HwangHeeWon" />
            </div>
        </div>
        <div className='MyInfo mb-5'>
            <div>
                <p id='Name'>황희원</p>
                <div>경기도 김포시</div>
                <div>99.01.25</div>
            </div>
        </div>
        <div className='MyInfo'>
            <div>
                <div className='Info'><strong>Tel. </strong><a href='tel:010-5703-4472'>010-5703-4472</a></div>
                <div className='Info'><strong>E-mail </strong><a href='mailto:hheewon99@gmial.com'>hheewon99@gmial.com</a></div>
                <div className='Info'><strong>GitHub </strong><a target="_blank" href="https://github.com/HHeeW" without rel="noreferrer" > https://github.com/HHeeW</a></div>
            </div>
        </div>
    </div>
  )
}

export default Profile