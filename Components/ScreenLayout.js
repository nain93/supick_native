import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  background-color: black;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ScreenLayout = ({ loading, children }) => {
  return (
    <Container>
      {loading ? <ActivityIndicator color="white" /> : children}
    </Container>
  );
};

export default ScreenLayout;
