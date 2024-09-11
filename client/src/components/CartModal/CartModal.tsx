import React from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartModalProps {
  cartItems: CartItem[];
  onClose: () => void;
  onCheckout: () => void;
}

const CartModal: React.FC<CartModalProps> = ({
  cartItems,
  onClose,
  onCheckout,
}) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-modal">
      <h2>장바구니</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}개 - {item.price * item.quantity}원
          </li>
        ))}
      </ul>
      <p>총 합계: {total}원</p>
      <button onClick={onCheckout}>결제하기</button>
      <button onClick={onClose}>닫기</button>
    </div>
  );
};

export default CartModal;
