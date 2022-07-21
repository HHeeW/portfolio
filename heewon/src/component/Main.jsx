
import Water from './Background'
import './main.css'
import Sub1 from './Sub1'
const Main = () => {
  document.body.style.overflow = "hidden";
  let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
  console.log(scrollHeight)
  window.addEventListener('wheel', (e) => {
    if(e.deltaY >= 0){
        window.scrollBy({ left: 0, top: scrollHeight, behavior: "smooth" });
    }
    if(e.deltaY <= 0){
        window.scrollBy({ left: 0, top: -scrollHeight, behavior: "smooth" });
    }
});
  return (
    <div className='container'>
      <Water/>
      <div className="nameBox">
        <h1 className='name1'>안녕하세요,</h1>
        <h1 className='name2'>저는 황희원입니다.</h1>
      </div>
      <Sub1/>
    </div>
  )
}

export default Main