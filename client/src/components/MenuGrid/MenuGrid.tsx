import React from "react";
import * as S from "./styles";

interface MenuItem {
  _id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image?: string;
}

// MenuGridProps 정의
interface MenuGridProps {
  menus: MenuItem[];
  onMenuSelect: (menu: MenuItem) => void;
}

const MenuGrid: React.FC<MenuGridProps> = ({ menus, onMenuSelect }) => {
  return (
    <S.Container>
      {menus.map((menu) => (
        <S.GirdItem key={menu._id} onClick={() => onMenuSelect(menu)}>
          {menu.image ? (
            <S.Image src={menu.image} alt={menu.name} />
          ) : (
            <S.NoImage src="/exmenu.jpg"></S.NoImage>
          )}

          <S.MenuDisc>
            <p>{menu.name}</p>
            <p>{menu.price}</p>
          </S.MenuDisc>
        </S.GirdItem>
      ))}
    </S.Container>
  );
};

export default MenuGrid;
