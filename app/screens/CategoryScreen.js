import { FlatList } from "react-native-gesture-handler";
import { CATEGORIES } from "../dummy-data";
import CategoryGrid from "../../components/CategoryGrid";
import { Text } from "react-native";

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
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={categoryItem}
      numColumns={2}
    />
  );
};

export default CategoryScreen;
