import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./styles";

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleCart = () => {
    navigate("/cart", { state: { backgroundLocation: location } });
  };

  const handleOrderCheck = () => {
    navigate("/ordercheck", { state: { backgroundLocation: location } });
  };

  const handleChat = () => {
    navigate("/chat", { state: { backgroundLocation: location } });
  };

  return (
    <S.Container>
      <S.FooterChat>
        <S.ChatButton onClick={handleChat}>직원과의 대화</S.ChatButton>
      </S.FooterChat>
      <S.ButtonContainer>
        <S.FooterButton onClick={handleCart}>장바구니</S.FooterButton>
        <S.FooterButton onClick={handleOrderCheck}>주문내역</S.FooterButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default Footer;
