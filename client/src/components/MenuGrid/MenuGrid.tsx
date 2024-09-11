import React from "react";

interface Menu {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
}

interface MenuGridProps {
  menus: Menu[];
  onSelectMenu: (food: Menu) => void;
}

const MenuGrid: React.FC<MenuGridProps> = ({ menus, onSelectMenu }) => {
  return (
    <div className="food-grid">
      {menus.map((menu) => (
        <div
          key={menu.id}
          className="food-item"
          onClick={() => onSelectMenu(menu)}
        >
          {/* <img src={food.imageUrl} alt={food.name} /> */}
          <h3>{menu.name}</h3>
          <p>{menu.price}원</p>
        </div>
      ))}
    </div>
  );
};

export default MenuGrid;
