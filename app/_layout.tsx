import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryScreen from "@/app/screens/CategoryScreen";
import ViewMeal from "@/app/screens/ViewMeal";

const Stack = createNativeStackNavigator();
export default function RootLayout() {
  return (
        <NavigationContainer independent={true}>
    <GestureHandlerRootView>
      <StatusBar barStyle={"dark-content"} />
      <SafeAreaView style={styles.areaView}>
          <Stack.Navigator initialRouteName="CategoryScreen">
            <Stack.Group screenOptions={{
                headerShown: true,
              }}>

            <Stack.Screen
              name="CategoryScreen"
              component={CategoryScreen}
              
            />
            <Stack.Screen
              name="mealView"
              component={ViewMeal}
             
            />
            </Stack.Group>
          </Stack.Navigator>
      </SafeAreaView>
    </GestureHandlerRootView>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
  },
});
