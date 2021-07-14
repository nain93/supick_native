import React, { useRef } from "react";
import styled from "styled-components";
import { colors, Title } from "../../../../style";
import {
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import NormalButton from "../../../../Components/NormalButton";
import { MaterialIcons } from "@expo/vector-icons";
import ModalSelector from "react-native-modal-selector";
import dummyData from "../../../../data/dummyData";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useForm } from "react-hook-form";

const Container = styled.View`
  flex: 1;
  padding: 0 20px;
`;

const CoinBtnBox = styled.View``;

const CoinBtn = styled.TouchableOpacity`
  flex-direction: row;
`;

const CoinBtnText = styled.Text``;

const Exchange = () => {
  const coinRef = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // * nickname 저장, 로그인 true
  };

  const dismissKeyBoard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPress={dismissKeyBoard}
      disabled={Platform.OS === "web"}
    >
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          height: 700,
          justifyContent: "center",
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <Title style={{ color: colors.main, marginLeft: 0 }}>교환할 코인</Title>
        <CoinBtnBox>
          <ModalSelector
            style={{
              backgroundColor: colors.main,
            }}
            data={dummyData.result.List4.data}
            keyExtractor={(item) => item.id}
            labelExtractor={(item) => item.name}
            animationType={"fade"}
            initValue={"SUC"}
            initValueTextStyle={{
              textAlign: "left",
              color: "white",
            }}
            selectTextStyle={{ textAlign: "left", color: "white" }}
            optionTextStyle={{ color: "black" }}
            backdropPressToClose={true}
            cancelText={"닫기"}
          />
          {/* <MaterialIcons name="keyboard-arrow-down" size={24} color="black" /> */}
          <CoinBtn>
            <TextInput
              ref={coinRef}
              placeholder="coin"
              placeholderTextColor="black"
              onSubmitEditing={handleSubmit(onSubmit)}
              onChangeText={(text) => setValue("nickname", text)}
              autoCapitalize={"none"}
              returnKeyLabel="next"
            />
            <CoinBtnText>SUC</CoinBtnText>
          </CoinBtn>
        </CoinBtnBox>
        <Text>교환 가능양:10 SUC</Text>
        <NormalButton children={"교환하기"} />
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
};

export default Exchange;
