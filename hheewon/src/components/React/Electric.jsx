import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChargingStation } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react'
import Maps from './kakaomap/Maps'
import Lists from './kakaomap/Lists'
import './electric.css'
import Shopping from './Shopping';

const Electric = ({ViewPort}) => {

  const [myLat, setMylat] = useState()
  const [myLng, setMylng] = useState()
  const [lat, setLat] = useState(37.571076);
  const [lng, setLng] = useState(126.99588);

  useEffect(()=>{
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        setMylat(position.coords.latitude);
        setMylng(position.coords.longitude);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      });
    }
  }, [myLat, myLng])

  return (
    <div className='ElectricContainer'>
      <h1 className='text-center mb-5'data-aos="flip-down">API<FontAwesomeIcon icon={faChargingStation} className="ps-3" /></h1>
      <div className='ElectricBox'>
        <div className='ElectricBrick'>
          <div className='ElectrciSide' data-aos="flip-left">
            <Maps lat={lat} lng={lng} MyLat = {myLat} MyLng={myLng} ViewPort={ViewPort} />
            <Lists setLat={setLat} setLng={setLng} MyLat = {myLat} MyLng={myLng} ViewPort={ViewPort} />
          </div>
        </div>
        <div className='ElectricInfo' data-aos="flip-right">
          <p>공공데이터 API와 카카오맵을 활용하여 내 위치 기반 전기차 충전소의 위치를 확인할 수 있는 간단한 기능입니다. </p>
          <p>기존 React를 사용하여 만든 코드를 복사, 수정하여 만들었습니다.</p>
          <br/>
        </div>
      </div>
      <Shopping/>
    </div>
  )
}

export default Electric