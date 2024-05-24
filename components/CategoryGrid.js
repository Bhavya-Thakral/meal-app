import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import ViewMeal from "@/app/screens/ViewMeal";
import { useNavigation } from "@react-navigation/native";

const CategoryGrid = ({ title, color, onPress }) => {
  return (
    <View style={[styles.viewGrid]}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.press, { opacity: 0.75 }, { backgroundColor: color }]
            : [styles.press, { backgroundColor: color }]
        }
        onPress={onPress}
      >
        <View>
          <Text style={styles.gridText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGrid;

const styles = StyleSheet.create({
  viewGrid: {
    flex: 1,
    margin: 16,
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    overflow: "hidden",
  },
  gridText: {
    color: "black",
    fontSize: 18,
    fontWeight: "600",
  },
  press: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
