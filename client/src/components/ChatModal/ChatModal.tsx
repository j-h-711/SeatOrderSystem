import React, { useState, useEffect } from "react";

import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

// const socket = io("http://localhost:8000");

const ChatModal: React.FC = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  // useEffect(() => {
  //   // 서버에서 메시지를 수신
  //   socket.on("chat message", (msg: string) => {
  //     setMessages((prevMessages) => [...prevMessages, msg]);
  //   });

  //   return () => {
  //     socket.off("chat message"); // 컴포넌트 언마운트 시 이벤트 리스너 정리
  //   };
  // }, []);

  // const handleSend = () => {
  //   if (input) {
  //     socket.emit("chat message", input); // 메시지를 서버로 전송
  //     setInput(""); // 입력창 초기화
  //   }
  // };

  // const leaveRoom = () => {
  //   navigate(-1);
  // };

  return (
    <S.Overlay>
      <S.ModalContainer>
        {/* <S.ModalHeader>
          <h2>직원과의 대화</h2>
          <button onClick={leaveRoom}>나가기</button>
        </S.ModalHeader>

        <S.ModalContent>
          <ul>
            {messages.map((msg, index) => (
              <li key={index}>{msg}</li>
            ))}
          </ul>
        </S.ModalContent>

        <S.ModalFooter>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="메시지를 입력하세요"
          />
          <button onClick={handleSend}>전송</button>
        </S.ModalFooter> */}
      </S.ModalContainer>
    </S.Overlay>
  );
};

export default ChatModal;
