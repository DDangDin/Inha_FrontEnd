import React from 'react';
import '../css/Main3.scss';
import item1 from '../assets/item1.svg';
import item2 from '../assets/item2.svg';
import item3 from '../assets/item3.png';
import item4 from '../assets/item4.svg';
import AirPlane from  '../assets/AirPlane.png';

const Main3 = () => {
    return (
        <div className='Main3_Container'>
            <div className='Main3_Text_Wrapper'>
                <div className='item1'>대국민 친환경 디지털 생활 실천 프로젝트</div>
                <div className='item2'>디지털 탄소 포인트제란?</div>
            </div>
            <div className='Main3_Content_Wrapper'>
                <img src = {AirPlane} alt='Airplane' className='AirPlane'/>
                <div className='Content_Division'>
                    <div className='Content_item'>
                        <div className='box1'>
                            <img src = {item1} alt = 'item' className='Content_item_img'/>
                        </div>
                        <div className='Content_item_Text_Wrapper'>
                            <div className='title2'>참여 방법</div>
                            <div className='line'>
                                <div className='number'>01</div>
                                <div className='content'>디지털 탄소 포인트제 회원가입 (Gmail만 가능)</div>
                            </div>

                            <div className='line'>
                                <div className='number'>02</div>
                                <div className='content'>내 메일의 탄소 배출량 계산하기</div>
                            </div>

                            <div className='line'>
                                <div className='number'>03</div>
                                <div className='content'>방치된 메일 삭제</div>
                            </div>

                            <div className='line'>
                                <div className='number'>04</div>
                                <div className='content'>지구지키미 등급 획득와 함께 탄소 포인트 적립</div>
                            </div>

                            <div className='line'>
                                <div className='number'>05</div>
                                <div className='content'>디탄소 포인트제와 연동하여 인센티브 수령</div>
                            </div>
                        </div>
                    </div>
                    <div className='Content_item'>
                    <div className='box2'>
                        <img src = {item2} alt = 'item' className='Content_item_img'/>
                    </div>
                        <div className='Content_item_Text_Wrapper'>
                            <div className='title2'>지급 기준</div>
                                <div className='line'>
                                    <div className='content'>온실가스 감축률에 따라 탄소포인트 부여 (연 2회)</div>
                                </div>
                                <div className='line'>
                                    <div className='number' style={{paddingRight: '45px'}}>브론즈</div>
                                    <div className='content'>100 P</div>
                                </div>
                                <div className='line'>
                                    <div className='number' style={{paddingRight: '65px'}}>실버</div>
                                    <div className='content'>500 P</div>
                                </div>
                                <div className='line'>
                                    <div className='number' style={{paddingRight: '65px'}}>골드</div>
                                    <div className='content'>1000 P</div>
                                </div>
                                <div className='line'>
                                    <div className='number' style={{paddingRight: '23px'}}>플래티넘</div>
                                    <div className='content'>5000 P</div>
                                </div>
                                <div className='line'>
                                    <div className='number'>다이아몬드</div>
                                    <div className='content'>10000 P</div>
                                </div>
                        </div>
                    </div>
                </div>
                <div className='Content_Division'>
                    <div className='Content_item'>
                        <div className='box3'>
                            <img src = {item3} alt = 'item' className='Content_item_img'/>
                        </div>
                        <div className='Content_item_Text_Wrapper'>
                            <div className='title2'>등급 부여</div>
                                <div className='line'>
                                    <div className='number'>언랭크</div>
                                    <div className='content'>신규 가입 회원</div>
                                </div>
                                <div className='line'>
                                    <div className='number'>브론즈</div>
                                    <div className='content'>디지털 탄소 400g 이상 감축</div>
                                </div>
                                <div className='line'>
                                    <div className='number'>실버</div>
                                    <div className='content'>디지털 탄소 2,000g 이상 감축</div>
                                </div>
                                <div className='line'>
                                    <div className='number'>골드</div>
                                    <div className='content'>디지털 탄소 4,000g 이상 감축</div>
                                </div>
                                <div className='line'>
                                    <div className='number'>플레티넘</div>
                                    <div className='content'>디지털 탄소 20,000g 이상 감축</div>
                                </div>
                                <div className='line'>
                                    <div className='number'>다이아몬드</div>
                                    <div className='content'>디지털 탄소 40,000g 이상 감축</div>
                                </div>
                            </div>
                        </div>
                    <div className='Content_item'>
                        <div className='box4'>
                            <img src = {item4} alt = 'item' className='Content_item_img' />
                        </div>
                        <div className='Content_item_Text_Wrapper'>
                            <div className='title2'>인센티브 종류</div>
                                <div className='line'>
                                    <div className='number'>현금     상품권     종량제 봉투     지방세 납부</div>
                                </div>
                                <div className='line'>
                                    <div className='number'>기부     교통카드     상장     공공시설이용 바우처</div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main3;