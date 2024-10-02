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

  return (
    <S.Container>
      <p>푸터</p>
      <button onClick={handleCart}>장바구니</button>
      <button onClick={handleOrderCheck}>주문내역</button>
    </S.Container>
  );
};

export default Footer;
