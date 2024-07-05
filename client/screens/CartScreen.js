import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { featured } from "../constants";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

const CartScreen = () => {
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation();
  return (
    <View className="bg-whtie flex-1">
      {/* back button */}
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          className="absolute z-10 top-5 left-4 p-1 rounded-full shadow"
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: themeColors.bgColor(1) }}
        >
          <Icon.ArrowLeft stroke={"white"} strokeWidth={3} />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">Your Cart</Text>
          <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>
      </View>
      {/* delivery time */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="flex flex-row px-4 items-center"
      >
        <Image
          className="h-20 w-20 rounded-full"
          source={require("../assets/images/restaurants/delivery6.png")}
        />
        <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{ color: themeColors.text }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="bg-white pt-5"
      >
        {restaurant.dishes.map((dish, index) => {
          return (
            <View
              key={index}
              className="flex-row items-center space-x-3 rounded-3xl bg-white py-2 px-4 shadow-md mb-3 mx-2 "
            >
              <Text className="font-bold" style={{ color: themeColors.text }}>
                2 x
              </Text>
              <Image className="h-14  w-14 rounded-full" source={dish.image} />
              <Text className="flex-1 font-bold text-gray-700">
                {dish.name}
              </Text>
              <Text className="font-semibold text-base">${dish.price}</Text>
              <TouchableOpacity
                className="p-1 rounded-full"
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <Icon.Minus
                  stroke="white"
                  strokeWidth={2}
                  height={20}
                  width={20}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      {/* totals */}
      <View
        className="p-6 px-8 rounded-t-3xl space-y-4"
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
      >
        <View className="flex-row justify-between">
          <Text className="text-gray-700 ">Subtotal</Text>
          <Text className="text-gray-700 ">$20</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700 ">Delivery Free</Text>
          <Text className="text-gray-700 ">$20</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-extrabold">Order Total</Text>
          <Text className="text-gray-700 font-extrabold">$20</Text>
        </View>
        <View>
          <TouchableOpacity
          
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className="p-3 rounded-full"
          >
            <Text className="text-white font-bold text-center text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
