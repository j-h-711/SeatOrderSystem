import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate, useLocation } from "react-router-dom";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItem,
  clearCart,
} from "../../features/cart/cartSlice";
import { addOrder } from "../../features/order/orderSlice";
import Swal from "sweetalert2";
import * as S from "./styles";

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  // 장바구니 상태
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // 총 결제금액
  let totalPrice = 0;
  cartItems.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  const handleIncrease = (id: string) => {
    dispatch(increaseItemQuantity(id));
  };

  const handleDecrease = (id: string) => {
    dispatch(decreaseItemQuantity(id));
  };

  const handleRemove = (id: string) => {
    dispatch(removeItem(id));
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleOrder = () => {
    if (cartItems.length < 1) {
      Swal.fire({
        icon: "error",
        title: "장바구니가 비어있습니다.",
        text: "주문을 원하시는 메뉴를 확인하세요",
      });
    } else {
      Swal.fire({
        icon: "info",
        title: "주문을 진행하시겠습니까?",
        text: "주문을 완료하시려면 예를 눌러주세요.",
        showCancelButton: true,
        confirmButtonText: "예",
        cancelButtonText: "아니오",
        confirmButtonColor: "#429f50",
        cancelButtonColor: "#d33",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(addOrder(cartItems));
          dispatch(clearCart());
          // navigate를 setTimeout으로 비동기 처리하여 리렌더링 충돌 방지
          setTimeout(() => {
            navigate("/ordercheck", {
              state: { backgroundLocation: location },
            });
          }, 0);
        } else if (result.isDismissed) {
          setTimeout(() => {
            navigate(-1);
          }, 0);
        }
      });
    }
  };

  return (
    <S.Overlay>
      <S.ModalContainer>
        <S.ModalContent>
          <S.ModalHeader>
            <h1>장바구니</h1>
            <S.CloseButton onClick={handleBack}>X</S.CloseButton>
          </S.ModalHeader>

          {cartItems.length === 0 ? (
            <p>장바구니가 비어 있습니다.</p>
          ) : (
            <S.CartList>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.name} - 가격: {item.price} - 수량: {item.quantity}
                  <div>
                    <button onClick={() => handleIncrease(item.id)}>+</button>
                    <button onClick={() => handleDecrease(item.id)}>-</button>
                    <button onClick={() => handleRemove(item.id)}>제거</button>
                  </div>
                </li>
              ))}
            </S.CartList>
          )}

          <p>총 주문금액 : {totalPrice}</p>
          <S.ModalButton onClick={handleOrder}>주문하기</S.ModalButton>
        </S.ModalContent>
      </S.ModalContainer>
    </S.Overlay>
  );
};

export default CartPage;
