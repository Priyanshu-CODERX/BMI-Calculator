import * as React from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'

export default function FlatButton({text, onPress, bg}) {
  return(
    <TouchableOpacity onPress={onPress}>
      <View backgroundColor={bg} style={styles.btn}>
        <Text style={styles.btnText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 6,
    // backgroundColor: "#212121",
    width: 250,
    margin: 5,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 20,
    textAlign: "center",
  }
})