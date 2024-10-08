import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  height: 70%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1001;
`;

export const ModalHeader = styled.div`
  height: 10%;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
`;

export const ModalContent = styled.div`
  height: 80%;
  overflow-y: auto;
`;

export const ModalFooter = styled.div`
  display: flex;
  height: 10%;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ddd;
`;
