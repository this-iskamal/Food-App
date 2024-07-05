import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";

const DishRow = ({ item }) => {
  return (
    <View className="flex-row items-center bg-white rounded-3xl p-3 shadow-2xl mb-3 mx-2">
      <Image
        style={{ height: 100, width: 100 }}
        className="rounded-3xl"
        source={item.image}
      />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-xl">{item.name}</Text>
          <Text className="text-gray-700">{item.description}</Text>
          <View className="flex-row justify-between items-center pl-3">
            <Text className="text-gray-700 text-lg font-bold">
              ${item.price}
            </Text>
            <View className="flex-row items-center ">
              <TouchableOpacity
                className="p-1 rounded-full"
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <Icon.Minus
                  strokeWidth={2}
                  stroke={"white"}
                  height={20}
                  width={20}
                />
              </TouchableOpacity>
              <Text className="px-2">{2}</Text>
              <TouchableOpacity
                className="p-1 rounded-full"
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <Icon.Plus
                  strokeWidth={2}
                  stroke={"white"}
                  height={20}
                  width={20}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishRow;
