import React from 'react'
import './weather.css'
const Weather = () => {

  const weatherapp =()=>{
    return {__html:'<iframe src="./client/App/weathermap01/index.html"></iframe>'}
  } 

  return (
    <div className='AppContainer'>

        <div id='AppHTML'>
          <div dangerouslySetInnerHTML={weatherapp()}/>
        </div>
    </div>
  )
}

export default Weather