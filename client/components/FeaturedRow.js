import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description, restaurants }) => {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4 ">
        <View>
          <Text className="text-lg font-bold">{title}</Text>
          <Text className="text-gray-500 text-xs w-5/6">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: themeColors.text }} className="font-semibold">
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="overflow-visible py-5"
      >
        {restaurants.map((restaurant, index) => {
          return <RestaurantCard key={index} item={restaurant} />;
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
