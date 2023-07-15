import React, {useState, useEffect}from 'react';
import axios from 'axios';
import '../css/AbilityPage.scss';
import Animation from '../assets/Animation.png';
import Header from '../components/Header';

const AbilityPage = () => {

  const [data, setData] = useState(null);
  const BASE_URL = "https://751b2f76-8430-4656-9de0-82901640998f.mock.pstmn.io"
  useEffect(() => {
  //async를 사용하는 함수 따로 선언
  const fetchData = async () => {
    try {
      const response = await axios.get(
        BASE_URL + '//point?email={test}',
      );
      setData(response.data.data);
    } catch (e) {
      console.log(e);
          }
  };
      fetchData();
}, []); // 초기 렌더링에만 실행하도록~
  return (
    <div>
        <Header />
        <div className='AbilityPage_Container'>
          <div className='AbilityPage_Box1'>
            <div className='Box1_Wrapper'>
              <div className='Box1_text1'>내 메일의 탄소 배출량은?</div>
              <div className='Box1_text2'>jyj010818@gmail.com</div>
              <div className='Box1_text3'>2023.07.15 기준</div>
            </div>
            <div className='ExtraInf_Wrapper'>
              <div className='ExtraInf_Text1'>41,284g 는...</div>
              <div className='ExtraInf_Text2'>중형 전기차</div>
              <div className='ExtraInf_Text3'>779km</div>
              <div className='ExtraInf_Text2'>단거리 비행</div>
              <div className='ExtraInf_Text3'>161km</div>
              <div className='ExtraInf_Text2'>버스</div>
              <div className='ExtraInf_Text3'>393km</div>
              <div className='ExtraInf_Text2'>를 이동할 수 있는 배출량입니다.</div>
            </div>
          </div>
          <div className='AbilityPage_Box2'>
            <div className='Box2_Wrapper'>
              <div className='ExtraInf_Text4'>디지털 탄소 배출량이 엄청나셨군요?</div>
              <div className='ExtraInf_Text5'>다이아몬드 지구</div>
              <div className='ExtraInf_Text6'>41,284 g</div>
            </div>
            <img src={Animation} alt='Animaiton' className='img_bg'/>
            <button className='Box2_Btn' >메일 지우고 지구 살리기</button>
          </div>
        </div>
    </div>
  );
};

export default AbilityPage;