import styled from "styled-components";

// 오버레이: 배경을 반투명하게 만들어 줌
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); // 반투명한 배경
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; // 다른 요소 위에 위치
`;

// 모달 컨테이너: 중앙에 위치한 모달
export const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1001;
`;

// 모달 헤더: 제목과 닫기 버튼을 담은 헤더
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

// 닫기 버튼 스타일
export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

// 모달 컨텐츠: 주문 내역 리스트와 가격 표시
export const ModalContent = styled.div`
  height: 300px;
  overflow-y: auto;
`;

// 모달 푸터: 버튼들이 위치할 공간
export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

// 버튼 스타일
export const Button = styled.button<{ primary?: boolean }>`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => (props.primary ? "#429f50" : "#ccc")};
  color: white;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    opacity: 0.9;
  }
`;
