import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import{Feather} from '@expo/vector-icons'
import {
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native-gesture-handler";

export default class Register extends Component {
  render() {
    return (
      <ScrollView >
        <View style={styles.container}>
          <View style={styles.add__user}>
            <TouchableOpacity style={styles.overlay__text}>
            <Feather name="user"size={80} color="red" style={styles.icon}  />
            
              <Text style={styles.overlay__text__text}>ADD PROFILE PHOTO</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.input__container}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
             placeholder="Joseph Asante" placeholderTextColor="#aaaaaa"
             style={styles.input} textAlign="right"
            />
          </View>

          <View style={styles.input__container}>
            <Text style={styles.label}>Email</Text>
      
            <TextInput placeholder="joseph@example.com"  placeholderTextColor="#aaaaaa"
                            style={styles.input} textAlign="right" />
          </View>

          <View style={styles.input__container}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput placeholder="(+233) 245496252" placeholderTextColor="#aaaaaa"
                            style={styles.input} textAlign="right" />
          </View>

          <View style={styles.input__container}>
            <Text style={styles.label}>Role</Text>
            <TextInput placeholder="contact@ampersant.com" placeholderTextColor="#aaaaaa"
                            style={styles.input} textAlign="right" />
          </View>

          <View style={styles.input__container}>
            <Text style={styles.label}>Twitter</Text>
            <TextInput placeholder="@JosephReppy" placeholderTextColor="#aaaaaa"
                            style={styles.input} textAlign="right" />
          </View>

          <View style={styles.input__container}>
            <Text style={styles.label}>LinkedIn</Text>
            <TextInput placeholder="/Joseph" placeholderTextColor="#aaaaaa"
                            style={styles.input} textAlign="right" />
          </View>

          <View style={styles.button__container}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.button__text}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {

    // backgroundColor:  "#ffdd",
    backgroundColor: "#ffdd",
    flex: 1,
    flexDirection: "column",
  },
  icon: {
    alignSelf: "center",
    marginBottom: 20,
    height: 100,
    paddingTop: 30
  },
  overlay__text__text: {
    color: "blue",
    borderColor: "blue",
    borderWidth: 1,
    alignSelf: "center",
    padding: 10,
    fontWeight: "bold",
    letterSpacing: 3,
  },
  overlay__text: {
    marginVertical: 0,
    borderBottomWidth: 1,
    borderColor: "blue",
    paddingBottom: 20,
  },
  input__container: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
    // marginHorizontal: 20,
    // borderBottomWidth: 0.5,
    // borderColor: "grey",
    // paddingBottom: 10,
    // marginTop: 20,
    flexDirection: "row",
    borderBottomColor: "#aaaaaa",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingBottom: 20,
    marginTop: 10,
    paddingVertical: 14
  },
  input: {
    color: "#f7027d",
    fontSize: 13,
  },
  label: {
    color: "#aaaaaa",
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 2,
    marginHorizontal: 10
  },
  button__text: {
    color: "white",
    fontSize: 17,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 90,
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: 3,
  },
  button__container: {
    alignItems: "center",
    marginTop: 30,
  },
  button: {
    backgroundColor: "red",
    marginBottom: 42,
    elevation: 10,
  },
});

