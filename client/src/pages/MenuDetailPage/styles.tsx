import styled from "styled-components";

export const MenuDetailContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center; // 중앙 정렬
  align-items: center; // 중앙 정렬
`;

export const IMGContainer = styled.div`
  width: 50%;
  height: 100%; // 전체 높이 사용
  display: flex; // Flexbox 설정
  align-items: center; // 수직 중앙 정렬
  justify-content: center; // 수평 중앙 정렬
  padding-left: 10%; // 여백

  img {
    border-radius: 8px;
    max-width: 100%; // 이미지 비율 유지
    max-height: 100%; // 이미지 비율 유지
  }
`;

export const DetailContainer = styled.div`
  width: 50%;
  height: 60%; 
  margin-right: 10%; 
  padding-left: 10%; 
  display: flex;
  flex-direction: column; 렬
  justify-content: center; 
`;

export const TopArea = styled.div`
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

export const QDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  width: 20px;

  p {
    margin: 0;
    text-align: center;
  }
`;
