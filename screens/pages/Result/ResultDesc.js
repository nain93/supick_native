import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

const DescText = styled.Text`
  font-weight: 700;
  margin: 1% 0%;
`;

const ResultDesc = ({ id, pickId, detail }) => {
  const [detailOpen, setDetailOpen] = useState(false);

  useEffect(() => {
    if (detail) {
      setDetailOpen(false);
      return;
    }
    setDetailOpen(true);
    return;
  }, [detail]);

  return (
    <View
      style={
        detailOpen && id === pickId ? { display: "flex" } : { display: "none" }
      }
    >
      <DescText>당신의 결과는 설명과 같습니다</DescText>
      <DescText>당신의 결과는 설명과 같습니다</DescText>
      <DescText>당신의 결과는 설명과 같습니다</DescText>
    </View>
  );
};

export default ResultDesc;
