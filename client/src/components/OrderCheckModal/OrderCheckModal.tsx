import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { clearOrders } from "../../features/order/orderSlice";
import Swal from "sweetalert2";
import * as S from "./styles";

const OrderCheckModal: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const order = useSelector((state: RootState) => state.order);

  let totalPrice = 0;
  order.items.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  // 모달 닫기 함수 - 뒤로가기
  const handleClose = () => {
    navigate(-2);
  };

  const handleOrderClear = () => {
    dispatch(clearOrders());
    Swal.fire({
      icon: "success",
      title: "결제가 완료되었습니다.",
      text: "다음에 또 방문해주세요. 감사합니다.",
    });
    navigate("/");
  };

  return (
    <S.Overlay>
      <S.ModalContainer>
        <S.ModalHeader>
          <h2>주문 내역</h2>
          <S.CloseButton onClick={handleClose}>X</S.CloseButton>
        </S.ModalHeader>
        <S.ModalContent>
          <ul>
            {order.items.map((item, index) => (
              <li key={index}>
                {item.name} - {item.quantity}개 - {item.price * item.quantity}원
              </li>
            ))}
          </ul>
          <p>총 합계: {totalPrice}원</p>
        </S.ModalContent>
        <S.ModalFooter>
          <S.Button onClick={handleClose}>닫기</S.Button>
          <S.Button primary onClick={handleOrderClear}>
            금액 결제
          </S.Button>
        </S.ModalFooter>
      </S.ModalContainer>
    </S.Overlay>
  );
};

export default OrderCheckModal;
