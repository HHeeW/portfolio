import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChargingStation } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
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
    <div className='ReactContainer'>
      <h1 className='text-center mb-5'data-aos="flip-down">API<FontAwesomeIcon icon={faChargingStation} className="ps-3" /></h1>
      <div className='ElectricBox'>
        <div className='ElectricBrick'>
          <div className='ElectrciSide' data-aos="flip-left">
            <Maps lat={lat} lng={lng} MyLat = {myLat} MyLng={myLng} ViewPort={ViewPort} />
            <Lists setLat={setLat} setLng={setLng} MyLat = {myLat} MyLng={myLng} ViewPort={ViewPort} />
          </div>
        </div>
        <div className='ElectricInfo' data-aos="flip-right">
          <div>
            <p>
              • React를 활용한 반응형 웹<br/>
              <br/>
              • 공공데이터 Api 활용 <br/>
              • 충전소 위치, 정보 데이터<br/>
              <br/>
              • React Kakao map Api <br/>
              • 사용 지도/마크 생성<br/>
            </p>
          </div>
          <div className='BtnBox'>
            <Button variant="contained" href="https://github.com/HHeeW/portfolio/tree/main/parking" target="_blank" endIcon={<CodeIcon />}>코드</Button>
          </div>
        </div>
      </div>
      <Shopping/>
    </div>
  )
}

export default Electric