import React from 'react';
import '../css/Main2.scss';
import Check from '../assets/Check.svg';
import useScrollCount from '../Hooks/useScrollCount';

const MainComponent2 = () => {
    return (
        <div className='MainComponent2_Container'>
            <div className='title'>탄소 배출량</div>
            <div className='DataBox_Wrapper'>
                <div className='DataBox'>
                    <div className='DataBox_Text1' {...useScrollCount(1000, 0, 1)}/>
                    <div className='DataBox_Text2'>나무 100그루</div>
                </div>
                <div className='DataBox'>
                     <div className='DataBox_Text1' {...useScrollCount(100, 0, 1)}/>
                    <div className='DataBox_Text2'>나무 50그루</div>
                </div>
                <div className='DataBox'>
                     <div className='DataBox_Text1' {...useScrollCount(10, 0, 5)}/>
                    <div className='DataBox_Text2'>나무 10그루</div>
                </div>
                <div className='DataBox'>
                     <div className='DataBox_Text1' {...useScrollCount(1, 0, 10)}/>
                    <div className='DataBox_Text2'>나무 1그루</div>
                </div>
            </div>
            <button className='CheckBox_Wrapper'>
                <div className='CheckBox_Image'>
                    <img src={Check} alt='Check'/>
                </div>
                <div className='CheckBox_Text'> Test Your Mail</div>
            </button>
        </div>
    );
};

export default MainComponent2;