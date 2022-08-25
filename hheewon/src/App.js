import React from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import Home from './components/Home'

const App = () => {
  return (
    <>
      <Header/>
      <div className='Box1'>
        <Profile/>
        <div className='Box2'>
          <Home/>
        </div>
      </div>
    </>
  )
}

export default App