import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footter from '../components/Footter';
import '../css/RemovePage.scss';

const RemovePage = () => {

    const [mail, setMail] = useState([{}]);
    const BASE_URL = "https://751b2f76-8430-4656-9de0-82901640998f.mock.pstmn.io"
    useEffect(() => {
		//async를 사용하는 함수 따로 선언
        const category = 'promotions'
		const fetchData = async () => {
			try {
				const response = await axios.get(
					BASE_URL + `/mail/read/data?category=${category}`,
				);
				setMail(
                    {
                        id : response.data.id,
                        title : response.data.title,
                        data : response.data.data,
                    }
                );
			} catch (e) {
				console.log(e);
            }
		};
        fetchData();
	}, []); // 초기 렌더링에만 실행하도록~
    return (
        <div>
            <Header/>
            <div>
                <div className='ArticlePage_Container'>
                    <div className='Article_Content_Wrapper'>
                        {mail.map(data_item => 
                            <div className='Article_content' key={data_item.id}>
                                <div className='Article_title'>{data_item.title}</div>
                                <div className='Article_date'>{data_item.date}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footter/>
        </div>
    );
};
export default RemovePage;