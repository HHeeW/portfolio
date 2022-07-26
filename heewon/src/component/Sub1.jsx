import React from 'react'

const Sub1 = () => {
  return (
    <div className='Box'>
        <div className='Sub1' data-aos="fade-up"data-aos-easing="ease-in-sine">
            <div className='subox' data-aos="fade-right">
                <h2>
                    <img src="./images/html.png" alt="html" className='skillImg'/>
                    <img src="./images/css.png" alt="html" className='skillImg'/>
                    <img src="./images/js.png" alt="html" className='skillImg'/>
                </h2>
            </div>
            <div className='subox' data-aos="fade-left">
                <h2>
                    <img src="./images/jQuery.png" alt="jquery" className='skillImg'/>
                    <img src="./images/bootstrap.png" alt="jquery" className='skillImg'/>
                </h2>
            </div>
            <div className='subox' data-aos="fade-right">
                <h2>ReactJS</h2>
            </div>
            <div className='subox' data-aos="fade-left">
                <h2>GitHub</h2>
            </div>
        </div>
    </div>
  )
}

export default Sub1