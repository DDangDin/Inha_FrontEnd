/* NewsList.js */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from '../components/NewsItem';
import axios from 'axios';
import Header from '../components/Header';
import Footter from '../components/Footter';

const NewsListBlock = styled.div`
   box-sizing: border-box;
   padding-bottom: 3rem;
   width: 768px;
   margin: 0 auto;
   margin-top: 2rem;
   @media screen and (max-width: 768px) {
      width: 100%;
      padding-left: 1rem;
      padding-right: 1rem;
   }
`;

const NewsPage = () => {
   const [articles, setArticles] = useState(null);
   const [loading, setLoading] = useState(false);

    useEffect(() => {
        // async를 사용하는 함수 따로 선언
        const fetchData = async () => {
          setLoading(true);
          try {
            const response = await axios.get(
              'https://newsapi.org/v2/everything?q=탄소중립&language=ko&apiKey=1ef666fb16fd4326be060981d2156b07',
            );
            setArticles(response.data.articles);
          } catch (e) {
            console.log(e);
          }
          setLoading(false);
        };
        fetchData();
    }, []); // 초기 렌더링에만 실행하도록~

   // 대기 중일 때
   if (loading) {
      return <NewsListBlock>대기 중..</NewsListBlock>;
   }
   // 아직 articles 값이 설정되지 않았을 때
   if (!articles) {
      return null;
   }

   // articles 값이 유효할 때
   return (
    <div>
        <Header />
        <NewsListBlock>
         {articles.map((article) => (
            <NewsItem key={article.url} article={article} />
         ))}
      </NewsListBlock>
      <Footter/>
    </div>
   );
};

export default NewsPage;