import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header'
import Profile from './components/Profile'
import Home from './components/Home/Home'
import Team from './components/Team/Team';
import WebDesgin from './components/Web/WebDesgin';
import Weather from './components/App/Weather'
import Electric from './components/React/Electric';


const App = () => {
  
  const media= (window.matchMedia('(max-width: 500px)').matches);
  
  AOS.init({
    duration: 500,
    easing: 'ease-in-sine'
  });

  return (
    <>
      <Header/>
      <div className='Box1'>
        <Profile ViewPort={media}/>
        <div className='Box2'>
          <Home ViewPort={media}/>
          <Team ViewPort={media}/>
          <WebDesgin/>
          <Weather/>
          <Electric ViewPort={media}/>
        </div>
      </div>
    </>
  )
}

export default App