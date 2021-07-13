import React from "react";
import styled from "styled-components";
import { colors, Title } from "../../../../style";

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

const Exchange = () => {
  return (
    <Container>
      <Title style={{ color: colors.main }}>교환할 코인</Title>
    </Container>
  );
};

export default Exchange;
