import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import image from "../assets/images/welcome.jpg";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class HomePage extends Component {
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <View>
          <Image source={image} style={styles.image} />
        </View>
        <View style={styles.text__container}>
          <Text style={styles.text__uno}>
            KEEP IN TOUCH WITH THE PEOPLE OF AMPERSAND
          </Text>
          <Text style={styles.text__deux}>
            Sign in or Register with your email
          </Text>
        </View>
        <View style={styles.links}>
          <TouchableOpacity style={styles.touch__link2} onPress={()=>{navigation.navigate('Register')}}>
            <Text style={styles.register__link}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touch__link1} onPress={()=>{navigation.navigate('Sign in')}}>
            <Text style={styles.signin__link}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffdd",
    flexDirection: "column",
    flex: 1,
  },
  image: {
    height: 420,
    width: 470,
  },
  text__container: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  text__uno: {
    color: "blue",
    letterSpacing: 4,
    fontWeight: "bold",
  },
  text__deux: {
    color: "grey",
    marginVertical: 20,
    letterSpacing: 3,
  },
  links: {
    flexDirection: "row",
    marginHorizontal: 50,
    marginTop: 120,
  },
  signin__link: {
    color: "blue",
    marginLeft: 140,
    borderBottomWidth: 3,
    borderBottomColor: 'red',
    fontSize: 18,
    textAlign: "center"
  },
  register__link: {
    color: "blue",
    borderBottomWidth: 3,
    borderBottomColor: 'red',
    fontSize: 18,
  },
});
