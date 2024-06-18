import { View, FlatList, StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../dummy-data";
import RenderMeal from "../../components/RenderMeal";
import Heading from "@/components/Heading";

const ViewMeal = ({ route ,navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(catId) >= 0;
  });


  useLayoutEffect(()=>{

    const catTitle = CATEGORIES.find((category)=>category.id === catId).title
    navigation.setOptions({
      title:catTitle
    })
  },[catId,navigation])

  function renderMeal(itemData) {
    function pressHandler(){
      return navigation.navigate("DetailsOfMeal", {
        categoryId: itemData.item.id,
      });
    }


    const item = itemData.item;

    const mealProps= {
      id:item.id,
      title : item.title,
      imgUrl : item.imageUrl,
      duration : item.duration,
      affordability:item.affordability,
      complexity: item.complexity,
    }
    

    return (
      <RenderMeal {... mealProps} onPress={pressHandler} />
    );
  }

  return (
    <View style={styles.main}>
      <Heading heading={"List of Meals"} />
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
