import React, { useState } from "react";

const MenuDetailModal: React.FC = () => {
  return (
    <div className="food-modal">
      <h2>제육</h2>
      <p>매콤한제육</p>
      <p>12000원</p>
      {/* 수량 확인 및 증가 감소 */}
      <button>장바구니에 추가</button>
      <button>닫기</button>
    </div>
  );
};

export default MenuDetailModal;
