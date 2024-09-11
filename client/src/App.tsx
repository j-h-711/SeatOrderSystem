import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import MenuDetail from "./components/MenuDetail/MenuDetail";
import CategoryBar from "./components/CategoryBar/CategoryBar";
import * as S from "./styles";

const categories = ["메인", "사이드", "주류/음료", "추가메뉴"]; // 예시 카테고리

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <S.MiddleContainer>
        <CategoryBar categories={categories} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/menu/:category" element={<MainPage />} />
            <Route path="/menu/:category/:id" element={<MenuDetail />} />
          </Routes>
        </div>
      </S.MiddleContainer>
      <Footer />
    </Router>
  );
};

export default App;
