import './profile.css'
import $ from "jquery";
import { useState } from 'react';

const Profile = ({ViewPort}) => {
    const [scroll, setScroll] = useState(true);
    $(document).on('mouseover', '#Name', ()=>{
        $('#Name').text('HwangHeeWon')
    })
    $(document).on('mouseleave', '#Name', ()=>{
        $('#Name').text('황희원')
    })
    
    $(document).on('scroll' , function () {
        let height = $(document).scrollTop();
        height >= 150 ? setScroll(false) : setScroll(true);
        // console.log(height);	// 스크롤할때마다 해당 스크롤 위치 좌표값(높이)
        // console.log(scroll);
    });

  return (
    <div className='ProfileBox' data-aos={ViewPort ? "" : "fade-right"}>
        <div className='PhotoBox'>
            <div className='Photo'>
                <img src="./img/HwangHeeWon.jpg" alt="HwangHeeWon" />
            </div>
        </div>
        <div className='MyInfo'>
            <div>
                <h1 id='Name'>황희원</h1>
                <h4>경기도 김포시</h4>
                <h4>99.01.25</h4>
            </div>
        </div>
        <div className='MyInfo'>
            <div>
                <h5 className='Info'><strong>Tel. </strong><a href='tel:010-5703-4472'>010-5703-4472</a></h5>
                <h5 className='Info'><strong>E-mail </strong><a href='mailto:hheewon99@gmail.com'>hheewon99@gmail.com</a></h5>
                <h5 className='Info'><strong>GitHub </strong><a target="_blank" href="https://github.com/HHeeW" without rel="noreferrer" > https://github.com/HHeeW</a></h5>
            </div>
        </div>
        {ViewPort ? scroll ? <img src="./img/scroll.gif" alt="스크롤이미지" className='ScrollImg' />: '': ''}
    </div>
  )
}

export default Profile