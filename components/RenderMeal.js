import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";

const RenderMeal = ({
  title,
  imgUrl,
  duration,
  complexity,
  affordability,
  onPress,
}) => {
  return (
    <View style={styles.main}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.main, { opacity: 0.8 }] : [styles.main]
        }
        onPress={onPress}
      >
        <View style={styles.innerView}>
          <Image
            source={{ uri: imgUrl }}
            style={styles.img}
            // resizeMode="contain"
          />
          <Text style={styles.title}>{title}</Text>
          <View style={[styles.deatils]}>
            <Text style={styles.text}>{duration} min</Text>
            <Text style={styles.text}>{complexity}</Text>
            <Text style={styles.text}>{affordability}</Text>
          </View>
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
  innerView: {
    flex: 1,
    width: "80%",
    alignItems: "center",
    marginVertical: 15,
    gap: 10,
    overflow: "hidden",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
  },
  img: {
    width: "80%",
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    fontWeight: "medium",
    textTransform: "capitalize",
    alignSelf: "flex-start",
  },
  deatils: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
