import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearOrders } from "../../features/order/orderSlice";
import Swal from "sweetalert2";
import Loading from "../Loading/Loading";
import * as S from "./styles";
import { RootState } from "../../store/store";

const OrderCheckModal: React.FC = () => {
  // React.FC를 유지
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orderItems = useSelector((state: RootState) => state.order.items);

  let totalPrice = 0;
  orderItems.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  const handleClose = () => {
    navigate(-2);
  };

  const handleOrder = async () => {
    try {
      // await postOrder(tableNumber); // 주문 API 요청
      Swal.fire({
        icon: "success",
        title: "결제가 완료되었습니다.",
        text: "다음에 또 방문해주세요. 감사합니다.",
      });
      dispatch(clearOrders()); // 주문 성공 시 주문 내역 초기화
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "결제 실패",
        text: "문제가 발생했습니다. 다시 시도해 주세요.",
      });
    }
  };

  return (
    <>
      <S.Overlay>
        <S.ModalContainer>
          <S.ModalHeader>
            <h2>내역 확인 및 주문</h2>
            <S.CloseButton onClick={handleClose}>X</S.CloseButton>
          </S.ModalHeader>
          <S.ModalContent>
            {orderItems.length === 0 ? (
              <p>주문 내역이 비어있습니다.</p>
            ) : (
              <div>
                {orderItems.map((item) => (
                  <li key={item.id}>
                    {item.name} - 가격: {item.price} - 수량: {item.quantity}
                  </li>
                ))}
              </div>
            )}

            <p>총 결제금액 : {totalPrice}</p>
          </S.ModalContent>
          <S.ModalFooter>
            <S.Button onClick={handleClose}>닫기</S.Button>
          </S.ModalFooter>
        </S.ModalContainer>
      </S.Overlay>
    </>
  );
};

export default OrderCheckModal;
