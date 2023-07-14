import React from 'react';
import Header from '../components/Header';
import Footter from '../components/Footter';
import '../css/LoginPage.scss';
import Naver from '../assets/Naver.svg';
import Google from '../assets/Google.svg';

const LoginPage = () => {
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
                    />
                    <input
                        className='PassWord_Input'
                        placeholder='패스워드'
                        type = 'password'
                    />
                    <button className='Login_Button'>로그인</button>
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