import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryScreen from "@/app/screens/CategoryScreen";
import ViewMeal from "@/app/screens/ViewMeal";
import Favorite from "@/app/screens/FavoriteMeals";
import DetailsOfMeal from "@/app/screens/DetailsOfMeal";
import FavoriteContextProvider from "@/app/context/FavoriteContext";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

function NewDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "pink",
        },
        headerTintColor: "red",
        sceneContainerStyle: {
          backgroundColor: "pink",
        },
        drawerInactiveBackgroundColor: "green",
        drawerActiveBackgroundColor: "purple",
        drawerActiveTintColor: "yellow",
        drawerInactiveTintColor: "brown",
      }}
    >
      <Drawer.Screen name="Categories" component={CategoryScreen} />
      <Drawer.Screen name="Favorites" component={Favorite} />
    </Drawer.Navigator>
  );
}

// function BottomTabs() {
//   return (
//     <BottomTab.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <BottomTab.Screen name="Categories" component={CategoryScreen} />
//       <BottomTab.Screen name="Favorites" component={Favorite} />
//     </BottomTab.Navigator>
//   );
// }

export default function RootLayout() {
  return (
    <FavoriteContextProvider>
      <NavigationContainer independent={true}>
        <GestureHandlerRootView>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView style={styles.areaView}>
            <Stack.Navigator initialRouteName="CategoryScreen">
              <Stack.Group
                screenOptions={{
                  headerShown: true,
                  headerStyle: {
                    backgroundColor: "pink",
                  },
                  headerTintColor: "red",
                  contentStyle: {
                    backgroundColor: "pink",
                  },
                }}
              >
                {/* <Stack.Screen
                name="Tab"
                component={BottomTabs}
                options={{
                  headerTitle: "List of categories",
                  headerShown: false,
                }}
              /> */}
                <Stack.Screen
                  name="Drawer"
                  component={NewDrawer}
                  options={{
                    headerTitle: "List of categories",
                    headerShown: false,
                  }}
                />
                <Stack.Screen name="mealView" component={ViewMeal} />
                <Stack.Screen name="DetailsOfMeal" component={DetailsOfMeal} />
              </Stack.Group>
            </Stack.Navigator>
          </SafeAreaView>
        </GestureHandlerRootView>
      </NavigationContainer>
    </FavoriteContextProvider>
  );
}

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
  },
});
