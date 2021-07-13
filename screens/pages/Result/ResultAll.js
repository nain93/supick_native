import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import NormalButton from "../../../Components/NormalButton";
import dummyData from "../../../data/dummyData";

const Container = styled.View`
  padding: 0 20px;
  padding-bottom: 20px;
  flex: 1;
`;

const ScrollContainer = styled.ScrollView`
  flex: 1;
`;

const ResultItemBox = styled.View`
  width: 100%;
  height: auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

const Item = styled.View`
  flex-direction: row;
  margin-bottom: 1%;
`;

const ItemImg = styled.Image`
  width: 20%;
  height: 70px;
  border-radius: 10px;
`;

const TitleBox = styled.View`
  justify-content: space-around;
  margin-left: 5%;
`;

const ItemTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

const ItemDesc = styled.Text`
  font-weight: 700;
`;

const ItemBtnBox = styled.View`
  flex-direction: row;
`;

const ItemBtnText = styled.Text`
  font-weight: 700;
`;

const DescText = styled.Text`
  font-weight: 700;
  margin: 1% 0%;
`;

const ResultAll = ({ navigation }) => {
  const [detailOpen, setDetailOpen] = useState(false);
  const [pickId, setPickId] = useState("");

  const handleDetailOpen = (id) => {
    setPickId(id);
    if (detailOpen) {
      setDetailOpen(false);
      return;
    }
    setDetailOpen(true);
    return;
  };

  return (
    <Container>
      <ScrollContainer>
        {dummyData.result.List4.data.slice(0, 10).map((item) => (
          <ResultItemBox key={item.id}>
            <Item>
              <ItemImg source={{ uri: item.img }} />
              <TitleBox>
                <ItemTitle>집중, 기초 체력키우기</ItemTitle>
                <ItemDesc>전체 이용자 중 %가 해당 됩니다.</ItemDesc>
                <ItemBtnBox>
                  <TouchableOpacity
                    style={{ marginRight: "5%" }}
                    onPress={() => handleDetailOpen(item.id)}
                  >
                    <ItemBtnText>자세히 보기</ItemBtnText>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <ItemBtnText>추천 링크</ItemBtnText>
                  </TouchableOpacity>
                </ItemBtnBox>
              </TitleBox>
            </Item>
            <View
              style={
                item.id === pickId ? { display: "flex" } : { display: "none" }
              }
            >
              <DescText>당신의 결과는 설명과 같습니다</DescText>
              <DescText>당신의 결과는 설명과 같습니다</DescText>
              <DescText>당신의 결과는 설명과 같습니다</DescText>
            </View>
          </ResultItemBox>
        ))}
      </ScrollContainer>

      <NormalButton
        navigation={navigation}
        children={"다른 PICK 해보기"}
        path={"Home"}
      />
    </Container>
  );
};

export default ResultAll;
