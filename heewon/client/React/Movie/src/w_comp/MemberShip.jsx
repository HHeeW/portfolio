import React, { useState } from 'react'
import './membership.css';
import TopBar from './TopBar';

import { Link } from 'react-router-dom';

const MemberShip = () => {
  const [yview, setYview] = useState(false);
  const Yview = () =>{
    setYview(true)
  }
  
  
  return (
    <>
    <TopBar />
    <div className="w_s-n">
        <h2><i class="fa-solid fa-circle"></i> MemberShip : CHK 회원님께만 드리는 특별한 혜택! </h2>
        <img src="w_images/membership_banner.jpg" alt="membership_banner"></img>
        <div className="w_membership">
            <img src="w_images/member1.png" alt="10%할인"></img>
            <div className="w_membership-text">
                <h3><i class="fa-regular fa-face-grin-hearts"></i> CHK 회원이신 KT, SKT, U+ 모든 고객님 주목!</h3>
                <p>결제 금액의 10% 할인해드립니다!!!!!</p>
                <p>초특가 할인 혜택을 놓치지 마세요!!!!!</p>
                <p>신규 회원님들께는 <span>1000원</span> 추가 할인~~~</p>
                <p>( <i class="fa-solid fa-caret-up"></i> 문장 드레그하시오. )</p>
                <p><i class="fa-regular fa-lightbulb"></i> 할인 방법 <i class="fa-regular fa-lightbulb"></i></p>
                <p><i class="fa-solid fa-arrow-right"></i> 로그인 후 결제시 자동 적용됩니다.</p>
                <p><i class="fa-solid fa-bookmark"></i> 주의 <i class="fa-solid fa-bookmark"></i></p>
                <p>행사기간: 2022..05.02 ~ 2022.12.31 (기간유의)</p>
                <p>한달에 최대 3번만 적용 가능합니다.</p>
            </div>
            
        </div>
        <div className="w_member-button-place">
            <Link to={'/join'}><button className="w_member-button">회원가입 바로 가기</button></Link>
        </div>

    </div>
    </>
  )
}

export default MemberShip