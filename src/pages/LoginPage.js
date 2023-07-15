import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footter from '../components/Footter';
import '../css/LoginPage.scss';
import Naver from '../assets/Naver.svg';
import Google from '../assets/Google.svg';

const LoginPage = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const fixEmail = 'jyj010818@gmail.com'
    const fixPassword = '1754';


    const checked = (email, password) => {
        if(email === fixEmail && password === fixPassword) {
            return true;
        } else{
            return false;
        }
    }
    return (
        <div>
            <Header />
            <div className='LoginPage_Container'>
                <form className='LoginForm_Wrapper'>
                    <div className='Login_Text'>Log in</div>
                    <input 
                        className='Email_Input'
                        placeholder='이메일'
                        type='email'
                        value = {email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        className='PassWord_Input'
                        placeholder='패스워드'
                        type = 'password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button 
                        className='Login_Button'
                        onSubmit={
                            checked(email,password) ? navigate(`/ability/${email}`) : undefined
                        }
                    >로그인</button>
                    <div className='horizon_Wrapper'>
                        <hr className='horizon'></hr>
                        <div className='horizon_Text'>또는</div>
                        <hr className='horizon'></hr>
                    </div>
                    <div className='Image_Wrapper'>
                        <div className='Login_img'>
                            <img src={Google} alt='google' />
                        </div>
                        <div className='Login_img'>
                            <img src={Naver} alt='naver'/>
                        </div>
                    </div>
                </form>
            </div>
            <Footter />
        </div>
    );
};

export default LoginPage;