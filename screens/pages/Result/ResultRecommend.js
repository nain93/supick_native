import React from "react";
import styled from "styled-components/native";
import { colors, Title } from "../../../style";
import dummyData from "../../../data/dummyData";
import Carousel from "react-native-snap-carousel";
import { ActivityIndicator } from "react-native";

const Container = styled.View`
  align-items: center;
`;

const ImgBox = styled.View`
  width: 100%;
  padding: 0 20px;
`;
const RecommendImg = styled.Image`
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const SlideBtn = styled.TouchableOpacity``;

const SlideImg = styled.Image`
  height: 150px;
  border-radius: 15px;
`;

const RecommendBtn = styled.TouchableOpacity`
  border: 1px solid ${colors.main};
  width: 70%;
  height: 50px;
  margin: 20px 0;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const RecommendBtnText = styled.Text`
  color: ${colors.main};
  font-weight: 700;
`;

const renderItem = ({ item }) => {
  return (
    <SlideBtn>
      <SlideImg source={{ uri: item.img }} />
    </SlideBtn>
  );
};

const ResultRecommend = ({ navigation }) => {
  return (
    <Container>
      <Title>추천</Title>
      <ImgBox>
        <RecommendImg source={{ uri: dummyData.result.List3.data[2].img }} />
      </ImgBox>
      <Title>이번엔 무슨 PICK?!</Title>
      <Carousel
        layout={"default"}
        renderItem={renderItem}
        data={dummyData.result.List1.data}
        sliderWidth={420}
        itemWidth={200}
        loop={true}
      />
      {/* <ActivityIndicator color="black" style={{ width: 420, height: 150 }} /> */}
      <RecommendBtn onPress={() => navigation.navigate("Home")}>
        <RecommendBtnText>다른 PICK 해보기</RecommendBtnText>
      </RecommendBtn>
    </Container>
  );
};

export default ResultRecommend;
