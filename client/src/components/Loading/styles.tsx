import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed; /* 전체 화면을 차지하도록 */
  top: 0; /* 상단에서 시작 */
  left: 0; /* 왼쪽에서 시작 */
  width: 100vw; /* 전체 너비 */
  height: 100vh; /* 전체 높이 */
  background-color: rgba(248, 249, 250, 0.8); /* 반투명 배경색 */
  font-family: "Arial", sans-serif;
  color: #333;
  z-index: 999; /* 다른 요소보다 위에 표시 */
`;

export const Loader = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid orange;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 20px;
`;
