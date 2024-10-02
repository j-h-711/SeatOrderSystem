import React from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import useGetMenuById from "../../hooks/getMenuById";
import { addItem } from "../../features/cart/cartSlice"; // 수정
import Loading from "../../components/Loading/Loading";
import * as S from "./styles";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
interface CartState {
  items: CartItem[];
}

const MenuDetail: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { category, id } = useParams();

  const [quantity, setQuantity] = React.useState(1);
  const { menu, loading } = useGetMenuById(id);

  const handleBackToMenu = () => {
    navigate(-1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // 장바구니 추가
  const addToCart = () => {
    // console.log(quantity, menu.name);
    if (menu) {
      const cartItem: CartItem = {
        id: menu._id,
        name: menu.name,
        price: menu.price,
        quantity: quantity,
      };
      dispatch(addItem(cartItem));
      // navigate(`/menu/${category}`);
      navigate("/cart", { state: { backgroundLocation: location } });
    }
  };

  if (loading) return <Loading />;

  return (
    <S.MenuDetailContainer>
      <S.IMGContainer>
        {menu.image ? (
          <img src={menu.image} alt={menu.name} />
        ) : (
          <img src="/exmenu.jpg" alt="No Image" />
        )}
      </S.IMGContainer>
      <S.DetailContainer>
        <S.TopArea>
          <button onClick={handleBackToMenu}>뒤로 가기</button>
        </S.TopArea>
        <S.MiddleArea>
          <h2>{menu.name}</h2>
          <p>{menu.description}</p>
          <p>가격: {menu.price}</p>
          <p>상세설명 : {menu.description}</p>
        </S.MiddleArea>
        <S.BottomArea>
          <S.QuentityContainer>
            <S.QBtn onClick={handleDecrease}>
              <p>-</p>
            </S.QBtn>
            <S.QDisplay>
              <p>{quantity}</p>
            </S.QDisplay>
            <S.QBtn onClick={handleIncrease}>
              <p>+</p>
            </S.QBtn>
          </S.QuentityContainer>
          <button onClick={addToCart}>장바구니에 추가</button>
        </S.BottomArea>
      </S.DetailContainer>
    </S.MenuDetailContainer>
  );
};

export default MenuDetail;
