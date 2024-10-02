import styled from "styled-components";

export const Container = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 가로 3개, 균등한 너비 */
  grid-auto-rows: 400px; /* 콘텐츠에 맞게 행의 높이 조정 */
  gap: 30px; /* 그리드 아이템 사이의 간격 (선택 사항) */
`;

export const GirdItem = styled.div`
  background-color: none;
  height: 100%;
  border-radius: 10px;
  border: 1px solid white;
  cursor: pointer;
  overflow: hidden; /* 이미지가 경계 넘어감 해결 */
`;

export const Image = styled.img`
  width: 100%;
  height: 70%; /* 원하는 높이로 설정 */
  object-fit: cover; /* 이미지 비율 유지 */
  border-bottom: 1px solid #ddd;
`;

export const NoImage = styled.img`
  width: 100%;
  height: 70%; /* 원하는 높이로 설정 */
  object-fit: cover; /* 이미지 비율 유지 */
  border-bottom: 1px solid #ddd;
`;

export const MenuDisc = styled.div`
  height: 30%;
  align-items: center;

  p {
    color: white;
    font-weight: bold;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: auto;
    margin-right: auto;
  }
`;
