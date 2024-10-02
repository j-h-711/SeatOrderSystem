import styled from "styled-components";

// 전체 화면을 덮는 반투명한 오버레이
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); // 배경을 어둡게 처리
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

// 모달의 컨테이너, 화면 중앙에 위치
export const ModalContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

// 모달 내부의 컨텐츠 (버튼, 텍스트 등)
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ModalButton = styled.button`
  background-color: #429f50;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #357a40;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: #333;
  }
`;

// 장바구니 리스트 스타일링
export const CartList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  height: 300px;
  overflow-y: auto;

  li {
    margin: 10px 0;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      margin-left: 10px;
    }
  }
`;
