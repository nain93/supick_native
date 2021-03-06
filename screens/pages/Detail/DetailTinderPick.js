import React, { useState, useRef, useCallback } from "react";
import styled from "styled-components";
import { colors, Title } from "../../../style";
import dummyData from "../../../data/dummyData";
import Swiper from "react-native-deck-swiper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFocusEffect, CommonActions } from "@react-navigation/native";

const Container = styled.View`
  flex: 1;
  background-color: ${colors.main};
  align-items: center;
  justify-content: center;
`;

const SlideBtn = styled.TouchableOpacity`
  margin: 20px;
`;

const SlideImg = styled.Image`
  height: 300px;
  border-radius: 15px;
`;

const CountText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 10%;
`;

const BtnBox = styled.View`
  justify-content: space-around;
  width: 100%;
  margin-top: 5%;
`;

const ArrowBox = styled.View`
  align-items: center;
  margin: 0 20%;
`;

const ArrowStyle = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const BtnStyle = styled.TouchableOpacity``;

const BtnText = styled.Text`
  font-size: 25px;
  font-weight: 700;
  color: white;
`;

const renderItem = (item) => {
  return (
    <SlideBtn activeOpacity={1}>
      <SlideImg source={{ uri: item?.img }} />
    </SlideBtn>
  );
};

const DetailTinderPick = ({ navigation }) => {
  const [swipeCount, setSwipeCount] = useState(1);
  const swiper = useRef();

  // const refresh = () => {
  //   if (swipeCount === 8) {
  //     setSwipeCount(1);
  //     return;
  //   }
  // };

  const swipeLeft = () => {
    swiper?.current?.swipeLeft();
  };

  const swipeRight = () => {
    swiper?.current?.swipeRight();
  };

  // useFocusEffect(
  //   useCallback(() => {
  //     renderItem();
  //     return () => renderItem();
  //   }, [swipeCount])
  // );

  // todo API 재요청

  return (
    <Container>
      <Swiper
        ref={swiper}
        cards={dummyData.result.List1.data}
        renderCard={renderItem}
        // onSwipedLeft={(data) => console.log(data)}
        // onSwipedRight={(data) => console.log(data)}
        onSwiped={(cardIndex) => {
          setSwipeCount(cardIndex);
        }}
        onSwipedAll={() => {
          navigation.navigate("Result");
        }}
        cardIndex={2}
        backgroundColor={colors.main}
        stackSize={3}
      />
      <Title
        style={{ fontSize: 20, color: "white", zIndex: 1, marginTop: 400 }}
      >
        Q) 당신의 연애스타일은..?
      </Title>
      <BtnBox>
        <CountText>{swipeCount} / 8</CountText>

        <ArrowStyle>
          <ArrowBox>
            <Ionicons name="return-up-back-outline" size={30} color="white" />
            <BtnStyle onPress={swipeLeft}>
              <BtnText>Not</BtnText>
            </BtnStyle>
          </ArrowBox>
          <ArrowBox>
            <Ionicons
              name="return-up-forward-outline"
              size={30}
              color="white"
            />
            <BtnStyle onPress={swipeRight}>
              <BtnText>Yes</BtnText>
            </BtnStyle>
          </ArrowBox>
        </ArrowStyle>
      </BtnBox>
    </Container>
  );
};

export default DetailTinderPick;
