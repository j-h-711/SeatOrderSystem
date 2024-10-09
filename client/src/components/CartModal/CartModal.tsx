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
import usePostOrder from "../../hooks/postOrder";
import Swal from "sweetalert2";
import * as S from "./styles";

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const { postOrder, loading } = usePostOrder();

  // 장바구니 상태
  const cartItems = useSelector((state: RootState) => state.cart.items);
  // console.log(cartItems);

  // 임시 테이블번호
  const tableNumber = 1;

  let totalPrice = 0;
  cartItems.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  // 장바구니 내 수량조절 및 제거
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

  const handleOrder = async () => {
    if (cartItems.length < 1) {
      Swal.fire({
        icon: "error",
        title: "장바구니가 비어있습니다.",
        text: "주문을 원하시는 메뉴를 확인하세요",
      });
    } else {
      const result = await Swal.fire({
        icon: "info",
        title: "주문을 진행하시겠습니까?",
        text: "주문을 완료하시려면 예를 눌러주세요.",
        showCancelButton: true,
        confirmButtonText: "예",
        cancelButtonText: "아니오",
        confirmButtonColor: "#429f50",
        cancelButtonColor: "#d33",
      });

      if (result.isConfirmed) {
        try {
          await postOrder(cartItems, tableNumber); // 서버에 주문 요청
          dispatch(addOrder(cartItems));
          dispatch(clearCart());

          setTimeout(() => {
            navigate("/ordercheck", {
              state: { backgroundLocation: location },
            });
          }, 0);

          Swal.fire({
            icon: "success",
            title: "결제가 완료되었습니다.",
            text: "주문 내역을 확인해 주세요.",
          });
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "결제 실패",
            text: "결제 중 문제가 발생했습니다. 다시 시도해 주세요.",
          });
        }
      } else if (result.isDismissed) {
        setTimeout(() => {
          navigate(-1);
        }, 0);
      }
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

          <S.MainArea>
            {cartItems.length === 0 ? (
              <p>장바구니가 비어 있습니다.</p>
            ) : (
              <S.CartList>
                {cartItems.map((item) => (
                  <li key={item.id}>
                    {item.image ? (
                      <S.Image src={item.image} alt={item.name} />
                    ) : (
                      <S.Image src="/exmenu.jpg"></S.Image>
                    )}

                    <S.CartItemText>
                      <S.MenuName>{item.name}</S.MenuName>
                      <S.MenuPrice>{item.price} 원</S.MenuPrice>
                    </S.CartItemText>

                    <S.Quantity>
                      <S.QuantityButton onClick={() => handleIncrease(item.id)}>
                        +
                      </S.QuantityButton>

                      <div>
                        <p>{item.quantity}</p>
                      </div>

                      <S.QuantityButton onClick={() => handleDecrease(item.id)}>
                        -
                      </S.QuantityButton>

                      <S.DeleteButton onClick={() => handleRemove(item.id)}>
                        x
                      </S.DeleteButton>
                    </S.Quantity>
                  </li>
                ))}
              </S.CartList>
            )}
          </S.MainArea>

          <S.ModalFooter>
            <S.TotalPrice>총 주문금액 : {totalPrice} 원</S.TotalPrice>
            <S.ModalButton onClick={handleOrder}>주문하기</S.ModalButton>
          </S.ModalFooter>
        </S.ModalContent>
      </S.ModalContainer>
    </S.Overlay>
  );
};

export default CartPage;
