import styled from "styled-components";

export const Container = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 300px;
  gap: 30px;
`;

export const GirdItem = styled.div`
  background-color: none;
  height: 100%;
  border-radius: 10px;
  border: 1px;
  cursor: pointer;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  border-bottom: 1px solid #ddd;
`;

export const NoImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
`;

export const MenuDisc = styled.div`
  height: 30%;
  align-items: center;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  p {
    color: white;
    font-weight: bold;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: auto;
    margin-right: auto;
  }
`;
