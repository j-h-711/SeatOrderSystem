import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); // 더 어두운 배경
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  background-color: #f7f7f7;
  padding: 30px;
  border-radius: 15px;
  width: 600px;
  height: 80%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  h1 {
    font-size: 24px;
    color: #333;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  border-radius: 4px;
  border: 2px solid black;
  height: 40px;
  width: 40px;
  text-align: center;
`;

export const MainArea = styled.div`
  width: 100%;
  height: 80%;
  overflow-y: hidden;
`;

export const CartList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;

  /* 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width: 6px; /* 스크롤바 너비 */
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5); /* 스크롤바의 색상 */
    border-radius: 10px; /* 스크롤바의 모서리를 둥글게 */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.7); /* 호버 시 스크롤바 색상 변경 */
  }

  &::-webkit-scrollbar-track {
    background-color: transparent; /* 스크롤바 트랙(배경)의 색상 */
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
    height: 14%;

    &:last-child {
      margin-bottom: 20px;
    }
  }
`;

export const CartItemText = styled.div`
  font-size: 20px;
  width: 50%;
  padding-left: 20px;
`;

export const MenuName = styled.p`
  margin: 10px;
  font-weight: bold;
`;
export const MenuPrice = styled.p`
  margin: 10px;
  color: red;
  font-weight: bold;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 15px;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;

  div {
    padding: 10px;
  }
`;

export const QuantityButton = styled.button`
  background-color: orange;
  color: #fff;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  margin: 0 5px;

  &:hover {
    background-color: red;
  }
`;

export const DeleteButton = styled.button`
  background-color: #ff6347;
  color: #fff;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 20px;
  margin-left: 10px;

  &:hover {
    background-color: red;
  }
`;

export const TotalPrice = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
`;

export const ModalFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalButton = styled.button`
  background-color: #ff6347;
  color: white;
  border: none;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 10px;
  font-size: 16px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: red;
  }
`;
