import React from "react";
import styled from "styled-components/native";
import ResultMain from "./ResultMain";
import ResultPKT from "./ResultPKT";
import ResultRecommend from "./ResultRecommend";

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

const Result = ({ navigation }) => {
  return (
    <Container>
      <ResultMain />
      <ResultPKT />
      <ResultRecommend />
    </Container>
  );
};

export default Result;
