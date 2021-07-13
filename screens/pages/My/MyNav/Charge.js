import React from "react";
import styled from "styled-components";
import { colors, Title } from "../../../../style";

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

const Charge = () => {
  return (
    <Container>
      <Title style={{ color: colors.main }}>이벤트 참여</Title>
    </Container>
  );
};

export default Charge;
