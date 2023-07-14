import React from 'react';
import {Route, Routes} from 'react-router-dom';
import AblilityPage from './pages/AblilityPage';
import ArticlePage from './pages/ArticlePage';
import MainPage from './pages/MainPage';
import NewsPage from './pages/NewsPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <Routes>
      <Route path = '/' element={<MainPage/>} />
      <Route path = '/news/:username' element = {<NewsPage/>} />
      <Route path = '/article/:username' element = {<ArticlePage/>} />
      <Route path = '/ablility/:username' element = {<AblilityPage/>} />
      <Route path = 'login' element = {<LoginPage/>} />
    </Routes>
  );
};

export default App;