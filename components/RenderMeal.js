import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";

const RenderMeal = ({ title, imgUrl }) => {
  return (
    <View style={styles.main}>
      <Pressable style={styles.press}>
        <View style={styles.innerView}>
          <Image
            source={{ uri: imgUrl }}
            style={styles.img}
            // resizeMode="contain"
          />
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default RenderMeal;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  press: {
    flex: 1,
    width: "100%",
  },
  innerView: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    marginVertical: 30,
    gap: 10,
  },
  img: {
    width: "80%",
    height: 200,
  },
  text: {
    fontSize: 18,
    fontWeight: "condensedBold",
  },
});
