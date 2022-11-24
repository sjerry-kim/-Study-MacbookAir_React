import { useEffect, useState } from "react";

const { kakao } = window;

const KakaoMapSearch = () => {
  const [kakaoMap,setKakaoMap] = useState(null);
  const [kakaoPs, setKakaoPs] = useState(null);
  var markers = [];

  useEffect(()=>{
    const mapContainer = document.getElementById('map');
    const mapOption = {
      center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
      level: 3 // 지도의 확대 레벨
    };
    const map = new kakao.maps.Map(mapContainer, mapOption); 
    setKakaoMap(map);
  })

  useEffect(()=>{
    const ps = new kakao.maps.services.Places();
    const infowindow = new kakao.maps.InfoWindow({zIndex:1});
    //👊🏻👊🏻👊🏻👊🏻👊🏻
  })

  return (
    <div class="map_wrap">
      <div id="map" style="width:100%;height:100%;position:relative;overflow:hidden;"></div>
      <div id="menu_wrap" class="bg_white">
        <div class="option">
          <div>
            <form onsubmit="searchPlaces(); return false;">
              키워드 : <input type="text" value="이태원 맛집" id="keyword" size="15"></input>
                    <button type="submit">검색하기</button> 
            </form>
          </div>
        </div>
        <hr/>
        <ul id="placesList"></ul>
        <div id="pagination"></div>
      </div>
    </div>
  );
};

export default KakaoMapSearch;