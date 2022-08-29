import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header'
import Profile from './components/Profile'
import Home from './components/Home/Home'
import Team from './components/Team/Team';

const App = () => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-sine'
  });
  return (
    <>
      <Header/>
      <div className='Box1'>
        <Profile/>
        <div className='Box2' data-aos="fade-right">
          <Home/>
          <Team/>
        </div>
      </div>
    </>
  )
}

export default App