import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../slices/cartSlice";

const CartIcon = () => {
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal)
  if (!cartItems.length) return null;

  
  return (
    <View className="absolute bottom-3 w-full z-50">
      <TouchableOpacity
        style={{ backgroundColor: themeColors.bgColor(1) }}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
        onPress={() => navigation.navigate("Cart")}
      >
        <View
          className="p-2 px-4 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
        >
          <Text className="font-extrabold text-white text-lg">{cartItems.length}</Text>
        </View>
        <Text className="flex-1 text-center font-extrabold text-white text-lg">
          View Cart
        </Text>
        <Text className="font-extrabold text-white text-lg">${cartTotal.toFixed(2)}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;
