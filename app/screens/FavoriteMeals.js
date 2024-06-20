import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useContext } from 'react'
import { FavoriteContext } from '../context/FavoriteContext'
import { MEALS } from '../dummy-data';
import RenderMeal from '@/components/RenderMeal';

const FavoriteMeals = ({navigation}) => {
  const favMealCtx = useContext(FavoriteContext);
  const favoriteMeals= MEALS.filter(meal => favMealCtx.ids.includes(meal.id));

  console.log("favMeals",favoriteMeals);

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
      <FlatList
        data={favoriteMeals}
        renderItem={renderMeal}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default FavoriteMeals

const styles = StyleSheet.create({
  main:{
    flex:1,
    paddingBottom:30
  }
})
