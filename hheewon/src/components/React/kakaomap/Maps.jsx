import { Map, MapMarker } from 'react-kakao-maps-sdk'
import LatLng from './LatLng'
// import './map.css'

const Maps = (props) => {
  let Viewwidth;
  let Viewheight;  
  if(props.ViewPort){
    Viewwidth= "100%";
    Viewheight="80vh";
  }else{
    Viewwidth= "70%";
    Viewheight="60vh";
  }
  return (
    <>
      <Map // 지도를 표시할 Container
        className='Map'
        center={{
          // 지도의 중심좌표
          lat: props.lat,
          lng: props.lng,
        }}
        
        style={{
          // 지도의 크기
          float: "right",
          width: Viewwidth,
          height: Viewheight
        }}
        level={4} // 지도의 확대 레벨
      >
        <LatLng MyLat = {props.MyLat} MyLng={props.MyLng} />
        
        <MapMarker // 마커를 생성합니다
          position={{ lat: props.MyLat, lng: props.MyLng }}
          image={{
            src: "./img/react/icons.gif", // 마커이미지의 주소입니다
            size: {
              width: 50,
              height: 50,
            }, // 마커이미지의 크기입니다
            options: {
              offset: {
                x: 27,
                y: 69,
              }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
            },
          }}
        />
      </Map>
    </>
  )
}

export default Maps