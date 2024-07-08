import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import CartScreen from "./screens/CartScreen";
import OrderPrepairing from "./screens/OrderPrepairing";
import DeliveryScreen from "./screens/DeliveryScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen
          name="Delivery"
          component={DeliveryScreen}
          options={() => ({
            presentation: "fullScreenModal",
          })}
        />
        <Stack.Screen
          name="OrderPrepairing"
          component={OrderPrepairing}
          options={() => ({
            presentation: "fullScreenModal",
          })}
        />

        <Stack.Screen
          name="Cart"
          options={() => ({
            presentation: "modal",
          })}
          component={CartScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
