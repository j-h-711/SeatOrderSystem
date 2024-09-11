import React, { useState } from "react";
import CategoryBar from "../../components/CategoryBar/CategoryBar";
import MenuGrid from "../../components/MenuGrid/MenuGrid";
import MenuDetail from "../../components/MenuDetail/MenuDetail";
import CartModal from "../../components/CartModal/CartModal";
import OrderCheckModal from "../../components/OrderCheckModal/OrderCheckModal";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
}

const HomePage: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<MenuItem | null>(null);
  const [cart, setCart] = useState([]);

  const handleMenuSelect = (menu: MenuItem) => {
    setSelectedMenu(menu);
  };

  const categories = ["메인", "사이드", "주류/음료", "추가메뉴"];

  return <div>메인페이지</div>;
};

export default HomePage;
