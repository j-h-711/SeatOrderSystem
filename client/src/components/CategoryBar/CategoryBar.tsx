import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./styles";

interface CategoryBarProps {
  categories: string[];
}

const CategoryBar: React.FC<CategoryBarProps> = ({ categories }) => {
  const navigate = useNavigate();

  const { category } = useParams<{ category: string }>();
  // console.log(category);

  // 카테고리 버튼 셀렉시 함수
  const handleCategorySelect = (category: string) => {
    navigate(`/menu/${category}`);
  };

  return (
    <S.Container>
      <S.CatergoryButtons>
        {categories.map((cat) => (
          <S.CategoryBtn
            key={cat}
            onClick={() => handleCategorySelect(cat)}
            isSelected={cat === category}
          >
            <p>{cat}</p>
          </S.CategoryBtn>
        ))}
      </S.CatergoryButtons>
    </S.Container>
  );
};

export default CategoryBar;
