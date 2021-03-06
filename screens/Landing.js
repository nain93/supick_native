import React from "react";
import styled from "styled-components";
// import landing from "../assets/landing.png";
import Carousel from "react-native-snap-carousel";
import dummyData from "../data/dummyData";
import { colors } from "../style";

const Container = styled.View`
  flex: 1;
  background-color: ${colors.main};
  align-items: center;
  justify-content: center;
`;

// const Logo = styled.Image`
//   max-width: 100%;
// `;

const ConnectSection = styled.View`
  flex: 0.5;
  justify-content: flex-start;
`;

const GoToStyle = styled.TouchableOpacity`
  border: 1px solid white;
  border-radius: 10px;
  padding: 15px 30px;
  width: 300px;
`;

const GoToHome = styled(GoToStyle)``;

const GoToWallet = styled(GoToStyle)`
  margin-top: 5%;
  background-color: white;
`;

const ConnectText = styled.Text`
  font-size: 15px;
  text-align: center;
`;

const SlideBtn = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
`;

const SlideImg = styled.Image`
  height: 300px;
  border-radius: 15px;
`;

const renderItem = ({ item }) => {
  return (
    <SlideBtn>
      <SlideImg source={{ uri: item.img }} />
    </SlideBtn>
  );
};

function Landing({ navigation }) {
  const goToHome = () => navigation.navigate("Home");
  const goToWallet = () => navigation.navigate("Wallet");

  return (
    <Container>
      {/* <Logo resizeMode="contain" source={landing} /> */}
      <Carousel
        layout={"default"}
        renderItem={renderItem}
        data={dummyData.result.List1.data}
        sliderWidth={415}
        itemWidth={300}
        loop={true}
      />
      <ConnectSection>
        <GoToHome onPress={goToHome}>
          <ConnectText style={{ color: "white" }}>
            나중에 월렛 생성하기
          </ConnectText>
        </GoToHome>

        <GoToWallet onPress={goToWallet}>
          <ConnectText style={{ color: colors.main }}>
            지금 바로 월렛 연동
          </ConnectText>
        </GoToWallet>
      </ConnectSection>
    </Container>
  );
}

export default Landing;
