import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

export const FooterChat = styled.p`
  margin-left: 20px;
`;

export const ChatButton = styled.button`
  padding: 8px 30px;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid white;
  border-radius: 5px;
  background-color: rgba(248, 249, 250, 0);
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c0392b;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  padding-right: 20px;
`;

export const FooterButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid white;
  border-radius: 5px;
  background-color: rgba(248, 249, 250, 0);
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c0392b;
  }
`;
