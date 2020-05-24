import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import logo from "../assets/images/logo.png";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class GetStarted extends Component {
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <View>
          <Image source={logo} style={styles.image} />
        </View>
        <View style={styles.contact__text__container}>
          <Text style={styles.contact__text}>AMPERSAND CONTACT SHARER</Text>
        </View>

        <View style={styles.getstarted__text__container}>
          <TouchableOpacity onPress={()=>{navigation.navigate('Home Page')}}>
            <Text style={styles.getstarted__text}>GET STARTED</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffdd",
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
  },
  image: {
    height: 45,
    width: 240,
    marginVertical: 150,
  },
  contact__text__container: {
    alignItems: "center",
    marginBottom: 200,
  },
  contact__text: {
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 4,
    textAlign: 'center'
  },
  getstarted__text:{
    color: "blue",
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 4,
    borderBottomWidth: 3,
    borderBottomColor: 'red',
    marginTop: 30
  }
});
