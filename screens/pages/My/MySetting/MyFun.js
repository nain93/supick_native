import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

const MyFun = () => {
  return (
    <Container>
      <Text>MyFun</Text>
    </Container>
  );
};

export default MyFun;
