import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme/index.js";
import Category from "../components/Category.js";
import { featured } from "../constants/index.js";
import FeaturedRow from "../components/FeaturedRow.js";

const HomeScreen = () => {
  const padding = Platform.OS === "android" ? StatusBar.currentHeight : 0;
  const android = Platform.OS === "android";


  return (
    <SafeAreaView style={{ paddingTop: padding }} className="bg-white">
      <StatusBar barStyle={android ? "light-content" : "dark-content"}  />

      {/* Search Bar */}
      <View className="flex flex-row items-center space-x-2 pb-2 px-4">
        <View className=" flex-row flex-1 p-3 items-center rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Restaurants" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">Dhulikhel, Nepal</Text>
          </View>
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 rounded-full"
        >
          <Icon.Sliders
            height="20"
            width="20"
            strokeWidth={2.5}
            stroke="white"
          />
        </View>
      </View>

      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* category */}
        <Category />

        {/* featured */}
        <View className="mt-5">{
            [featured,featured,featured].map((item,index)=>{
              return(
                <FeaturedRow key={index}  title={item.title} restaurants={item.restaurants} description={item.description} />
              )
            })
          }</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
