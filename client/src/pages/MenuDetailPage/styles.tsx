import styled from "styled-components";

export const MenuDetailContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center; // 중앙 정렬
  align-items: center; // 중앙 정렬
  background-color: #f8f8f8; // 배경색 추가
`;

export const DetailWrapper = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  background-color: #ffffff; // 흰색 배경 추가
  border-radius: 10px; // 모서리 둥글게
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); // 그림자 추가
`;

export const IMGContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10%;

  img {
    border-radius: 8px;
    max-width: 100%;
    max-height: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const DetailContainer = styled.div`
  width: 40%;
  height: 100%;
  padding-left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TopArea = styled.div`
  margin-top: 20%;
  height: 10%;
`;

export const MiddleArea = styled.div`
  height: 80%;
  p {
    margin: 0;
  }
  h2 {
    margin: 0;
  }
`;

export const BottomArea = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-between; 
  align-items: center; s
  margin-bottom: 20%;
`;

export const QuentityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const QBtn = styled.button`
  background-color: orange;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  width: 30px;
  height: 30px;

  p {
    margin: 0;
    text-align: center;
  }
`;

export const CartButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  width: 180px;
  height: 30px;
  margin-right: 20px;

  p {
    margin: 0;
    text-align: center;
  }
`;

export const QDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  width: 40px;

  p {
    margin: 0;
    text-align: center;
  }
`;
