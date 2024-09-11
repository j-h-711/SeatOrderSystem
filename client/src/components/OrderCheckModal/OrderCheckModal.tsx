import React from "react";

interface Order {
  id: number;
  items: { name: string; quantity: number; price: number }[];
  total: number;
}

interface OrderCheckModalProps {
  order: Order;
  onClose: () => void;
}

const OrderCheckModal: React.FC<OrderCheckModalProps> = ({
  order,
  onClose,
}) => {
  return (
    <div className="order-summary-modal">
      <h2>주문 내역</h2>
      <ul>
        {order.items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity}개 - {item.price * item.quantity}원
          </li>
        ))}
      </ul>
      <p>총 합계: {order.total}원</p>
      <button onClick={onClose}>닫기</button>
    </div>
  );
};

export default OrderCheckModal;
