import React from 'react';
import '../css/Footter.scss';

const footters = [
    {
        id : 1,
        text : '전체 서비스'
    },
    {
        id : 2,
        text : '이용약관'
    },
    {
        id : 3,
        text : '개인정보처리방침'
    },
    {
        id : 4,
        text : '고객센터'
    },
    {
        id : 5,
        text : 'ⓒ Away'
    },
]
const Footter = () => {
    return (
        <div className='Footter_Container'>
            <div className='Footter_Wrapper'>
                {footters.map( footter => 
                    <div className='Footter_items' key = {footter.id}>{footter.text}</div>
                    )}
            </div> 
        </div>
    );
};

export default Footter;