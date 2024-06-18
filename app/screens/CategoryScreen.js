import { FlatList } from "react-native-gesture-handler";
import { CATEGORIES } from "../dummy-data";
import { StyleSheet, View } from "react-native";
import CategoryGrid from "../../components/CategoryGrid";
import Heading from "../../components/Heading";

const CategoryScreen = ({ navigation }) => {
  function categoryItem(itemData) {
    function routeToMeal() {
      return navigation.navigate("mealView", {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategoryGrid
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={routeToMeal}
      />
    );
  }
  return (
    <View style={StyleSheet.main}>
      <Heading heading={"Categories"}/>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={categoryItem}
        numColumns={2}
      />
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  main:{
    flex:1,
    paddingBottom:30
  }
})
