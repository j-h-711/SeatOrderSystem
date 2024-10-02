import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  position: relative;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto; /* Enable scrolling for the container */
  max-height: 100%;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/mainIMG.jpg");
  background-size: cover;
  background-position: center;
  filter: blur(5px);
  z-index: -1;
`;

export const HeaderContainer = styled.div`
  height: 10%;
`;
export const MiddleContainer = styled.div`
  height: 80%;
  display: flex;
`;
export const FooterContainer = styled.div`
  height: 10%;
`;

export const CategoryArea = styled.div`
  flex: 0 0 22%;
  height: 100%;
  overflow-y: auto; /* 메뉴 영역에 스크롤 */
`;

export const MainArea = styled.div`
  flex: 1;
  height: 100%;
  overflow-y: auto; /* 메뉴 영역에 스크롤 */

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
`;
