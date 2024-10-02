import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import useGetMenus from "../../hooks/getMenus";
import CategoryBar from "../../components/CategoryBar/CategoryBar";
import MenuGrid from "../../components/MenuGrid/MenuGrid";
import MenuDetail from "../MenuDetailPage/MenuDetail";
import CartModal from "../../components/CartModal/CartModal";
import OrderCheckModal from "../../components/OrderCheckModal/OrderCheckModal";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";
import * as S from "./styles";

interface MenuItem {
  _id: string;
  name: string;
  price: number;
  category: string;
  description: string;
}

interface MainPageProps {
  menus: MenuItem[]; // menus 속성을 위한 타입 정의
  categories: string[];
}

const MainPage: React.FC = () => {
  const categories = ["all", "main", "side", "snack", "drink", "add"]; // 예시 카테고리
  const { category, id } = useParams(); // URL에서 카테고리와 ID를 가져옴
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedCategory, setSelectedCategory] = useState<string>(
    category || "all"
  );
  const { menus, loading, error } = useGetMenus();

  useEffect(() => {
    setSelectedCategory(category || "all");
  }, [category]);

  // 선택된 카테고리에 따라 메뉴 필터링
  const filteredMenus = menus.filter((menu) =>
    selectedCategory === "all" ? true : menu.category === selectedCategory
  );

  // 메뉴 선택 시 상세페이지로 이동
  const handleMenuSelect = (menu: MenuItem) => {
    navigate(`/menu/${menu.category}/${menu._id}`);
  };

  if (loading) return <Loading />;
  return (
    <S.Container>
      <S.MainContainer>
        <S.Background />
        <S.HeaderContainer>
          <Header />
        </S.HeaderContainer>
        <S.MiddleContainer>
          <S.CategoryArea>
            <CategoryBar categories={categories} />
          </S.CategoryArea>
          <S.MainArea>
            <MenuGrid menus={filteredMenus} onMenuSelect={handleMenuSelect} />
          </S.MainArea>
        </S.MiddleContainer>
        <S.FooterContainer>
          <Footer />
        </S.FooterContainer>
      </S.MainContainer>
    </S.Container>
  );
};

export default MainPage;
