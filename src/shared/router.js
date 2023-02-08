import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import Login from '../pages/joinLogin/Login';
import SignUp from '../pages/joinLogin/SignUp';
import MyPage from '../pages/mypage/MyPage';
import Home from './../pages/home/Home';
import MateDetail from './../pages/mate/MateDetail';

const Router = () => {
  // path 이름은 보통 소문자로 하니, 저희도 소문자로 통일하겠습니다
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/matedetail" element={<MateDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
