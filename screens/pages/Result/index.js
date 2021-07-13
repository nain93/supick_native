import React from "react";
import styled from "styled-components";
import ResultMain from "./ResultMain";
import ResultPKT from "./ResultPKT";
import ResultRecommend from "./ResultRecommend";

const Container = styled.ScrollView`
  flex: 1;
`;

const Result = ({ navigation }) => {
  return (
    <Container>
      <ResultMain />
      <ResultPKT navigation={navigation} />
      <ResultRecommend navigation={navigation} />
    </Container>
  );
};

export default Result;
