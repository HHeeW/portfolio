import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAndroid } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import React from 'react'
import './weather.css'
const Weather = () => {

  const weatherapp =()=>{
    return {__html:'<iframe title={"날씨 앱"} src="./client/App/weathermap01/index.html"></iframe>'}
  } 

  return (
    <div className='AppContainer'>
      <h1 className='text-center mb-5'data-aos="flip-down">날씨 앱<FontAwesomeIcon icon={faMobileAndroid} className="ps-3" /></h1>
      <div className='AppBox'>
        <div className='AppHTML' data-aos="flip-left">
          <div dangerouslySetInnerHTML={weatherapp()}/>
        </div>
        <div className='AppInfo' data-aos="flip-right">
          <div>
            <p>
              OpenWeather api를 사용하여 안드로이드용 날씨 앱을 제작하였고<br/>
              Cordova를 사용해 Apk파일 추출까지 해보았습니다.
            </p>
            <p>
              화면은 실제 앱 화면입니다.<br/>
              위치 허용을 하지 않으면 날씨가 나오지 않습니다.<br/>
              앱 오른쪽 상단 돋보기를 사용하여 검색이 가능합니다.<br/>
              앱 하단 이름을 클릭시 내 위치로 다시 돌아옵니다.
            </p>
          </div>
          
          <div className='BtnBox'>
              <Button variant="contained" href="https://github.com/HHeeW/portfolio/tree/main/hheewon/public/client/App/weathermap01" target="_blank" endIcon={<CodeIcon />}>코드</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather





