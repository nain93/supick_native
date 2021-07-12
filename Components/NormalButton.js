import React from "react";
import styled from "styled-components";
import { colors } from "../Style";

const Container = styled.View``;

const ResultBtn = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${colors.main};
`;

const ResultText = styled.Text`
  font-weight: 700;
`;

const NormalButton = ({ navigation, path, children }) => {
  return (
    <Container>
      <ResultBtn onPress={() => navigation.navigate(path)}>
        <ResultText>{children}</ResultText>
      </ResultBtn>
    </Container>
  );
};

export default NormalButton;
