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
              • JS(ES6)<br/>
              • Cordova<br/>
              • Open Weather API<br/>
              • Swiper<br/>
              • Search<br/>

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





