import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  Platform,
} from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({ item }) => {
  const navigation = useNavigation();
  const androidShadow = Platform.OS === "android";
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Restaurant", { ...item })}
    >
      <View
        style={{
          elevation: 7,
          shadowColor: themeColors.bgColor(androidShadow ? 1 : 0.2),
          shadowRadius: 7,
        }}
        className={"mr-6 bg-white rounded-3xl shadow-lg mb-2"}
      >
        <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{item.name}</Text>
          <View className="flex flex-row items-center space-x-1">
            <Image
              source={require("../assets/fullstar.png")}
              className="h-4 w-4"
            />
            <Text className="text-xs">
              <Text className="text-green-700">{item.stars}</Text>
              <Text className="text-gray-700">
                ({item.reviews} review) .{" "}
                <Text className="font-semibold">{item.category}</Text>
              </Text>
            </Text>
          </View>
          <View className="flex flex-row items-center space-x-1">
            <Icon.MapPin height="15" width="15" stroke="gray" />
            <Text className="text-xs text-gray-700 ">
              Nearby: {item.address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RestaurantCard;
