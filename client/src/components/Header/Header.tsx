import React from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleAdmin = () => {
    navigate("/admin");
  };

  return (
    <S.Container>
      <S.LogoAndName>
        <S.Title>SEAT오더</S.Title>
      </S.LogoAndName>
      <S.AdminBtn onClick={handleAdmin}>admin</S.AdminBtn>
    </S.Container>
  );
};

export default Header;
