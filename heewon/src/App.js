import React, { useEffect } from 'react'
import Main from './component/Main'

import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'

const App = () => {
  useEffect(()=>{
    window.onbeforeunload = function pushRefresh() {
      // window.scrollTo(0, 0);
    };
    AOS.init({
      duration: "1000",
      easing: "ease-in-out"
    });
    AOS.refresh(); 
  },[])
  
  return (
    <div>
      <Main/>
    </div>
  )
}

export default App