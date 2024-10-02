import styled from "styled-components";

interface CategoryBtnProps {
  isSelected: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-y: auto;
  max-height: 100%;

  &::-webkit-scrollbar {
    width: 0px; /* 스크롤바 안 보여줌 */
  }
`;

export const CatergoryButtons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const CategoryBtn = styled.button<CategoryBtnProps>`
  width: 88%;
  height: 50px;
  border-radius: 12px;
  margin-bottom: 8px;
  border: none;
  background-color: ${(props) => (props.isSelected ? "red" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  cursor: pointer;

  p {
    font-size: 18px;
    margin: 0;
    font-weight: bold;
  }
`;
