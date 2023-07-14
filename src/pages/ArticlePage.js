import React from 'react';
import Header from '../components/Header';
import Footter from '../components/Footter';
import '../css/ArticlePage.scss';


const datas = [
    {
        id : '1',
        type : '공지',
        title : '인센티브 수령 방법',
        date : '2023.07.15'
    },
    {
        id : '2',
        type : '공지',
        title : '인센티브 수령 방법',
        date : '2023.07.15'
    },
    {
        id : '3',
        type : '공지',
        title : '인센티브 수령 방법',
        date : '2023.07.15'
    },
    {
        id : '4',
        type : '공지',
        title : '인센티브 수령 방법',
        date : '2023.07.15'
    },
    {
        id : '5',
        type : '공지',
        title : '인센티브 수령 방법',
        date : '2023.07.15'
    },
    {
        id : '6',
        type : '공지',
        title : '인센티브 수령 방법',
        date : '2023.07.15'
    },
    {
        id : '7',
        type : '공지',
        title : '인센티브 수령 방법',
        date : '2023.07.15'
    },
    {
        id : '8',
        type : '공지',
        title : '인센티브 수령 방법',
        date : '2023.07.15'
    },
    {
        id : '9',
        type : '공지',
        title : '인센티브 수령 방법',
        date : '2023.07.15'
    }

]
const ArticlePage = () => {
    return (
        <div>
            <Header/>
            <div>
                <div className='ArticlePage_Container'>
                    <div className='Article_Wrapper'>
                        <div className='Article_Text_item'>공지사항</div>
                    </div>
                    <div className='Article_Content_Wrapper'>
                        {datas.map(data => 
                            <div className='Article_content' key={data.id}>
                                <div className='Article_type'>{data.type}</div>
                                <div className='Article_title'>{data.title}</div>
                                <div className='Article_date'>{data.date}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footter/>
        </div>
    );
};

export default ArticlePage;