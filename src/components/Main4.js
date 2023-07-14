import React from 'react';
import '../css/Main4.scss';
import {useNavigate} from 'react-router-dom';

const Main4 = () => {

    const navigate = useNavigate();
    const onClick = () => {
        navigate('/login');
    }
    return (
        <div className='Main4_Container'>
            <div className='Main4_Text_Wrapper'>
                <div className='Main4_item1'>디지털 탄소중립 포인트로 녹색생활 실천</div>
                <div className='Main4_item2'>내 메일의 탄소 배출량 계산하기</div>
                <div className='Main4_item3'>클릭 3번으로 디지털 탄소 감축에 도움을 주고 싶다면? </div>
            </div>
            <div className='Button_Wrapper'>
                <button className='WrapperButton1'>Click !</button>
                <button className='WrapperButton2' onClick = {onClick}>Login !</button>
            </div>
        </div>
    );
};

export default Main4;