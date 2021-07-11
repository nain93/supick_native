import React from "react";
import styled from "styled-components/native";
import { Title } from "../../../Style";
import dummyData from "../../../data/dummyData";

const Container = styled.View`
  align-items: center;
`;

const Desc = styled.Text``;

const ResultImg = styled.Image`
  width: 250px;
  height: 250px;
  margin: 20px 0;
  border-radius: 10px;
`;

const ResultText = styled.Text`
  padding-bottom: 10px;
`;
const ResultMain = () => {
  return (
    <Container>
      <Title>나에게 맞는 운동은?</Title>
      <Desc>집중 기초체력 키우기</Desc>
      <Desc style={{ opacity: 0.5 }}>전체 참여자중 %이 같은 결과입니다.</Desc>
      <ResultImg source={{ uri: dummyData.result.List5.data[0].img }} />
      <ResultText>당신의 결과는 설명과 같습니다</ResultText>
      <ResultText>당신의 결과는 설명과 같습니다</ResultText>
      <ResultText>당신의 결과는 설명과 같습니다</ResultText>
    </Container>
  );
};

export default ResultMain;
