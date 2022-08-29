import { faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import './skill.css'
const Skill = () => {
  return (
    <div className='SkillContainer'>
        <h1 className='text-center'>Skill<FontAwesomeIcon icon={faBook} className="ps-3" /></h1>
        <div className='SkillBox SkillBox1'></div>
        <div className='SkillBox SkillBox2'></div>
        <div className='SkillBox SkillBox3'></div>
        <div className='IconsBox SkillBox1'>
          <div className='IconBox'>
            <img className='Icon' src="img/icon/html.png" alt="html" />
            <img className='Icon' src="img/icon/css.png" alt="css" />
            <img className='Icon' src="img/icon/js.png" alt="js" />
            <img className='Icon' src="img/icon/Vue.png" alt="Vue" />
            <img className='Icon' src="img/icon/jQuery.png" alt="jQuery" />
            <img className='Icon' src="img/icon/React.png" alt="React" />
          </div>
        </div>
        <div className='IconsBox SkillBox2'>
          <div className='IconBox'>
            <img className='Icon' src="img/icon/Xd.png" alt="Xd" />
            <img className='Icon' src="img/icon/Ai.png" alt="Ai" />
            <img className='Icon' src="img/icon/Ps.png" alt="Ps" />
            <img className='Icon' src="img/icon/styled.png" alt="styled" />
            <img className='Icon' src="img/icon/BootStrap.png" alt="BootStrap" />
            <img className='Icon' src="img/icon/Mui.png" alt="Mui" />
          </div>
        </div>
        <div className='IconsBox SkillBox3'>
          <div className='IconBox'>
            <img className='Icon' src="img/icon/git.png" alt="git" />
            <img className='Icon' src="img/icon/GitHub.png" alt="GitHub" />
            <img className='Icon' src="img/icon/API.png" alt="API" />
          </div>
        </div>
    </div>
  )
}

export default Skill