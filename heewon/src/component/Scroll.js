import { useState } from "react";

const ScrollEvent = ()=>{
    const [scroll, setScroll] = useState(0)
    let browserPoint = (event)=>{
        console.log(`브라우저 좌표 : (${event.pageX}, ${event.pageY})`);
    }
    let clientPoint = (event) =>{
        console.log(`화면 좌표 : (${event.clientX}, ${event.clientY})`);
    }
    window.addEventListener('wheel', (e) => {
        console.log(e.deltaY, e.deltaX);
        browserPoint(e);
        clientPoint(e);
        if(e.deltaY >= 0){
            setScroll(scroll += 1000);
            window.scrollBy({ left: 0, top: 1000, behavior: "smooth" });
        }
        if(e.deltaY <= 0){
            setScroll(scroll -= 1000);
            window.scrollTo({ left: 0, top: scroll, behavior: "smooth" });
        }
    });
}
export default ScrollEvent;