import React from "react";
import styled from "styled-components";
import { Foundation, AntDesign, Ionicons } from "@expo/vector-icons";
import { colors } from "../../../style";
import NormalButton from "../../../Components/NormalButton";

const Container = styled.View`
  padding: 20px;
`;

const PktText = styled.Text`
  text-align: center;
  font-weight: 700;
`;

const PktBtnBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const PktBtn = styled.TouchableOpacity`
  border: 1px solid ${colors.main};
  width: 48%;
  height: 50px;

  border-radius: 5px;
  margin: 10px 0;
  align-items: center;
  justify-content: center;
`;

const BtnBox = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const PktBtnText = styled.Text`
  margin: 0 2%;
  font-weight: 700;
`;

const ResultPKT = ({ navigation }) => {
  return (
    <Container>
      <Foundation
        name="crown"
        size={24}
        color={colors.main}
        style={{ textAlign: "center" }}
      />
      <PktText>
        {
          "이번 PICK으로 PKT를 모았습니다!\n좋아요나 공유하면 PKT를 모을 수 있어요!"
        }
      </PktText>
      <PktBtnBox>
        <PktBtn>
          <BtnBox>
            <AntDesign name="heart" size={16} color="black" />
            <PktBtnText>좋아요</PktBtnText>
          </BtnBox>
          <PktBtnText>172</PktBtnText>
        </PktBtn>
        <PktBtn>
          <BtnBox>
            <Ionicons name="md-arrow-undo" size={18} color="black" />
            <PktBtnText>공유</PktBtnText>
          </BtnBox>
          <PktBtnText>12</PktBtnText>
        </PktBtn>
      </PktBtnBox>
      <NormalButton
        navigation={navigation}
        path={"ResultAll"}
        children={"다른 결과 확인"}
      />
    </Container>
  );
};

export default ResultPKT;
