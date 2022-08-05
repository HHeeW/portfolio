import './main.css'
import Sub1 from './Sub1';
import Sub2 from './Sub2';
import Background from './Wave/Background';

const Main = () => {
  return (
    <div className='container'>
      <Background/>
      <div className="Box">
        <div data-aos="fade-up-right">
          <h1 className='name'>안녕하세요,</h1>
        </div>
        <div data-aos="fade-up-left">
          <h1 className='name'>저는 황희원입니다.</h1>
        </div>
      </div>
      <Sub1/>
      <Sub2/>
    </div>
  )
}

export default Main