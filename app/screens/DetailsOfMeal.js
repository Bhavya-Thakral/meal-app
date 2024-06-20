import { View, Text, Image, StyleSheet } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { MEALS } from "../dummy-data";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { FavoriteContext } from "../context/FavoriteContext";


const DetailsOfMeal = ({ route, navigation }) => {
  const catId = route.params.categoryId;
  const favoriteMealCtx = useContext(FavoriteContext);

  useLayoutEffect(() => {
    // const mealName = MEALS.find((meal) => meal.id === catId).title;
    navigation.setOptions({
      headerRight:()=>{
          
      }
    });
  }, [navigation, catId]);

  const selectedMeal = MEALS.find((meal) => meal.id === catId);
  // console.log("selected meal", selectedMeal);

  const isFavMeal= favoriteMealCtx.ids.includes(catId);

  const favMealIds= favoriteMealCtx.ids;
  console.log("favMealIds",favMealIds);

  function changeFavoriteHandler(){
    if(isFavMeal){
      favoriteMealCtx.removeFavorite(catId);
    }
    else{
      favoriteMealCtx.addFavorite(catId);
    }
  }

  return (
    <ScrollView style={styles.component}>
        <View style={styles.mainView} >

      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.img} />
      <Ionicons name={isFavMeal?"star":"star-outline"} color={"yellow"} size={30}
          onPress={changeFavoriteHandler}
          />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <Text style={styles.title}>{selectedMeal.duration}</Text>
      <Text style={styles.title}>{selectedMeal.complexity}</Text>
      <Text style={styles.title}>{selectedMeal.affordability}</Text>
      <Text style={styles.title}>Ingredients</Text>
      
      {(selectedMeal.ingredients).map((item) => 
        <Text key={item}>{item}</Text>
      )}
      <Text style={styles.title}>Steps</Text>
      {(selectedMeal.steps).map((item) => 
        <Text key={item}>{item}</Text>
      )}

    </View>
    </ScrollView>

  );
};

export default DetailsOfMeal;

const styles = StyleSheet.create({
  component: {
    flex: 1,
    width: "100%",
    // alignItems: "center",
    gap: 10,
    marginVertical: 10, 
  },
  img: {
    width: 200,
    aspectRatio: 1 / 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  mainView:{
    alignItems:"center",
    width: "100%",
  }
});
