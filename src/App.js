import React from 'react';
import {Route, Routes} from 'react-router-dom';
import AbilityPage from './pages/AbilityPage';
import ArticlePage from './pages/ArticlePage';
import MainPage from './pages/MainPage';
import NewsPage from './pages/NewsPage';
import LoginPage from './pages/LoginPage';
import RemovePage from './pages/RemovePage';

const App = () => {
  return (
    <Routes>
      <Route path = '/' element={<MainPage/>} />
      <Route path = '/news/:username' element = {<NewsPage/>} />
      <Route path = '/article/:username' element = {<ArticlePage/>} />
      <Route path = '/ability/:username' element = {<AbilityPage/>} />
      <Route path = '/remove/:username' element = {<RemovePage/>} />
      <Route path = 'login' element = {<LoginPage/>} />
    </Routes>
  );
};

export default App;