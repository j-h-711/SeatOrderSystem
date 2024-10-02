import React from "react";
import * as S from "./styles"; // 스타일 파일을 사용할 경우

const Loading: React.FC = () => {
  return (
    <S.LoadingContainer>
      <S.Loader />
      <p>로딩 중입니다...</p>
    </S.LoadingContainer>
  );
};

export default Loading;
