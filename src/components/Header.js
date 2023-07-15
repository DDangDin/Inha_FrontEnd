import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Header.scss';

const menus = [
    {
        id : 1,
        text : '홈',
        url : '/'
    },
    {
        id : 2,
        text : '뉴스',
        url : '/news/:username'
    },
    {
        id : 3,
        text : '공지사항',
        url : '/article/:username'
    },
    {
        id : 4,
        text : '기능',
        url : '/ability/:username'
    }
]
const Header = () => {
    const navigate = useNavigate();

    return (
        <div className='Header_Container'>
            <div className='Text_Wrapper1' onClick = {()=>navigate('/')}>
                <div className='Text_Wrapper1_item1'>Away</div>
                <div className='Text_Wrapper1_item2'>Sangmyung University</div>
            </div>
            {menus.map(menu => <div className = 'Menu_Wrapper' key={menu.id} onClick={key => navigate(menu.url)}>{menu.text}</div>)}
            <button className = 'Header_Button' onClick={()=>navigate('/login')}>Login</button>
        </div>
    );
};

export default Header;