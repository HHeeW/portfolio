import React from 'react'
import { ListGroup} from 'reactstrap';
import Charger from './Charger';
// import './map.css'
const Lists = (props) => {
  let Viewwidth;
  let Viewheight;  
  if(props.ViewPort){
    Viewwidth= "100%";
    Viewheight="50vh";
  }else{
    Viewwidth= "30%";
    Viewheight="60vh";
  }
  return (
    <>
      {/* <h1 style={{minWidth: "20%", lineHeight:"9vh", paddingLeft: "3%", marginTop: "0"}}> 전기차 충선소 위치</h1> */}
      <ListGroup numbered className='List' style={{width: Viewwidth,height: Viewheight, overflowY: "scroll"}}>
        <Charger setLat={props.setLat} setLng={props.setLng} MyLat = {props.MyLat} MyLng={props.MyLng} />
      </ListGroup>
    </>
  )
}

export default Lists