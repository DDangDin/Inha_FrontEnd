import React, {useState, useEffect} from 'react';
import '../css/Main1.scss';
import useScrollCount from '../Hooks/useScrollCount';
import Icon1 from '../assets/Icon1.svg';
import Cloud from '../assets/Cloud.svg';
import axios  from 'axios';

const Main1 = () => {

    const [data, setData] = useState(null);
    useEffect(() => {
		//async를 사용하는 함수 따로 선언
		const fetchData = async () => {
			try {
				const response = await axios.get(
					'https://751b2f76-8430-4656-9de0-82901640998f.mock.pstmn.io/totalparcount',
				);
				setData(response.data.count);
			} catch (e) {
				console.log(e);
            }
		};
        fetchData();
	}, []); // 초기 렌더링에만 실행하도록~

    console.log(data);
    return (
    <div className='MainComponent1_Container'>
            <div className='Cloud'>
                <img src = {Cloud} alt = 'Cloud'/>
            </div>

            <div className='MainContent_Wrapper'>
                <div className='Text_Wrapper2'>
                    <div className='TW2_item1'>
                        Digital<br/>
                        Carborn<br/>
                        Point System
                    </div>
                    <div className='TW2_item2'>E-mail harms the healts  of the earth? </div>
                    <div className='Box1'>
                        <div className='Box1_items1'>누적 사용자 수</div>
                        <div className='Box1_items2'>{data}</div>
                        <div className='Box1_items3'>명</div>
                    </div>
                </div>
                <div className='Icon1'>
                    <img src = {Icon1} alt = 'Icon1' />    
                </div>
            </div>
            
        </div>
    );
};

export default Main1;