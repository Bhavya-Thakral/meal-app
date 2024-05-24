import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { MEALS } from "../dummy-data";
import RenderMeal from "../../components/RenderMeal";

const ViewMeal = ({ route }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(catId) >= 0;
  });

  function renderMeal(itemData) {
    return (
      <RenderMeal title={itemData.item.title} imgUrl={itemData.item.imageUrl} />
    );
  }

  return (
    <View style={styles.main}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMeal}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ViewMeal;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
