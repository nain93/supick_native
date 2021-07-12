import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Landing from "../screens/Landing";
import Home from "../screens/Home";
import Wallet from "../screens/Wallet";
import Upload from "../Components/Upload";
import DetailReady from "../screens/pages/Detail/DetailReady";
import DetailTinderPick from "../screens/pages/Detail/DetailTinderPick";
import DetailNormalPick from "../screens/pages/Detail/DetailNormalPick";
import { colors } from "../Style";
import Result from "../screens/pages/Result";
import Exchange from "../screens/pages/My/MyNav/Exchange";
import Charge from "../screens/pages/My/MyNav/Charge";
import History from "../screens/pages/My/MyNav/History";
import MyPick from "../screens/pages/My/MySetting/MyPick";
import MyFun from "../screens/pages/My/MySetting/MyFun";
import ResultAll from "../screens/pages/Result/ResultAll";

const TransitionScreenOptions = {
  ...TransitionPresets.ModalSlideFromBottomIOS,
};
const Stack = createStackNavigator();

function GlobalNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={TransitionScreenOptions}>
        <Stack.Screen
          name="Landing"
          options={{
            headerTitle: false,
            headerTransparent: true,
          }}
          component={Landing}
        />
        <Stack.Screen
          name="Wallet"
          options={{
            headerTitle: false,
            headerTransparent: true,
          }}
          component={Wallet}
        />
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
          component={Home}
        />
        <Stack.Screen
          name="Upload"
          options={{
            title: "뒤로",
            headerTitleStyle: { fontWeight: "700" },
          }}
          component={Upload}
        />
        <Stack.Screen
          name="DetailReady"
          options={{
            title: "뒤로",
            headerTransparent: true,
            headerTitleStyle: { fontWeight: "700" },
          }}
          component={DetailReady}
        />
        <Stack.Screen
          name="DetailTinderPick"
          options={{
            title: "뒤로",
            headerTitleStyle: { fontWeight: "700" },
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: colors.main,
              elevation: 0, // android
              shadowOpacity: 0, //ios
            },
          }}
          component={DetailTinderPick}
        />
        <Stack.Screen
          name="DetailNormalPick"
          options={{
            title: "뒤로",
            headerTransparent: true,
            headerTitleStyle: { fontWeight: "700" },
            headerTintColor: "white",
          }}
          component={DetailNormalPick}
        />
        <Stack.Screen
          name="Result"
          options={{
            title: "뒤로",
            headerTitleStyle: { fontWeight: "700" },
            headerStyle: {
              backgroundColor: "transparent",
              elevation: 0, // android
              shadowOpacity: 0, //ios
            },
          }}
          component={Result}
        />

        <Stack.Screen
          name="ResultAll"
          options={{
            title: "뒤로",
            headerTitleStyle: { fontWeight: "700" },
            headerStyle: {
              backgroundColor: "transparent",
              elevation: 0, // android
              shadowOpacity: 0, //ios
            },
          }}
          component={ResultAll}
        />

        <Stack.Screen
          name="ExChange"
          options={{
            title: "뒤로",
            headerTransparent: true,
            headerTitleStyle: { fontWeight: "700" },
            headerTintColor: colors.main,
          }}
          component={Exchange}
        />
        <Stack.Screen
          name="Charge"
          options={{
            title: "뒤로",
            headerTransparent: true,
            headerTitleStyle: { fontWeight: "700" },
            headerTintColor: colors.main,
          }}
          component={Charge}
        />
        <Stack.Screen
          name="History"
          options={{
            title: "뒤로",
            headerTransparent: true,
            headerTitleStyle: { fontWeight: "700" },
            headerTintColor: colors.main,
            // headerStyle: {
            //   backgroundColor: "transparent",
            //   elevation: 0, // android
            //   shadowOpacity: 0, //ios
            // },
          }}
          component={History}
        />
        <Stack.Screen
          name="MyPick"
          options={{
            title: "뒤로",
            headerTransparent: true,
            headerTitleStyle: { fontWeight: "700" },
            headerTintColor: colors.main,
          }}
          component={MyPick}
        />
        <Stack.Screen
          name="MyFun"
          options={{
            title: "뒤로",
            headerTransparent: true,
            headerTitleStyle: { fontWeight: "700" },
            headerTintColor: colors.main,
          }}
          component={MyFun}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default GlobalNav;
