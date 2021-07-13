import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

const MyPick = () => {
  return (
    <Container>
      <Text>MyPick</Text>
    </Container>
  );
};

export default MyPick;
