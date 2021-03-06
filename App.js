import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GetStarted from "./screens/GetStarted";
import HomePage from "./screens/HomePage";
import Signin from "./screens/Signin";
import Register from "./screens/Register";
import QRcode from "./screens/QRcode";

import QRcodeScanner from "./screens/QRcodeScanner";
import UserDetails from "./screens/UserDetails";
import Switcher from "./components/Switcher";
import OtherUserDetails from './screens/OtherUserDetails'



const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName={GetStarted}>
        <Stack.Screen
          options={{
            headerTitle: null,
            headerStyle: { height: 0 },
          }}
          name="Get Started"
          component={GetStarted}
        />
        <Stack.Screen
          options={{
            headerTitle: null,
            headerStyle: { height: 0 },
          }}
          name="Home Page"
          component={HomePage}
        />
        <Stack.Screen
          options={{
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
              letterSpacing: 4,
            },
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "red",
              height: 100,
            },
            title: "Register",
          }}
          name="Register"
          component={Register}
        />
        <Stack.Screen
          options={{
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
              letterSpacing: 4,
            },
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: {
            backgroundColor: "red",
            height: 100,
            },
            title: "Sign In",
          }}
          name="Sign in"
          component={Signin}
        />
        <Stack.Screen
         options={{
            headerTitle: null,
            headerStyle: { height: 0 },
          }}
          name="QRcode"
          component={QRcode}
        />
        <Stack.Screen name="QRcodeScanner" component={QRcodeScanner} />
        <Stack.Screen
          options={{
            headerTitleStyle: {
              
              fontWeight: "bold",
              fontSize: 20,
              letterSpacing: 1,
              backgroundColor: "red"
            },
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: {
            backgroundColor: "red",
            height: 150
            },

            title: "My Profile",
          }}
          name="UserDetails"
          component={UserDetails}
        />
        <Stack.Screen
          options={{
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
              letterSpacing: 1,
            },
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "red",
              height: 150,
            },
            title: "Member Profile",
          }}
          name="OtherUserDetails"
          component={OtherUserDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height:200,
    width: 450,
    marginTop: 40
  },
});
