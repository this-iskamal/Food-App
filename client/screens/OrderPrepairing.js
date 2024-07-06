import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const OrderPrepairing = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 3000);
  }, []);

  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Image
        source={require("../assets/images/restaurants/delivery.gif")}
        className="h-80 w-80"
      />
    </View>
  );
};

export default OrderPrepairing;
