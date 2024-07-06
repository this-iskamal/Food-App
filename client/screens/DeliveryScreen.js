import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { featured } from "../constants";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";

const DeliveryScreen = () => {
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation();
  return (
    <View className="flex-1 ">
      <MapView
        initialRegion={{
          latitude: 27.616321832440157,
          longitude: 85.54862477037186,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: 27.616321832440157,
            longitude: 85.54862477037186,
          }}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>
      <View className="rounded-t-3xl -mt-12 bg-white relative">
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              Estimated Delivery Time
            </Text>
            <Text className="text-3xl font-extrabold text-gray-700">
              20-30 minutes
            </Text>
            <Text className="mt-2 text-gray-700 font-semibold">
              {" "}
              Your order is own its way
            </Text>
          </View>
          <Image
            className="h-24 w-24"
            source={require("../assets/images/restaurants/delivery.gif")}
          />
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(0.8) }}
          className="flex-row rounded-full p-2 justify-between items-center my-5 mx-2"
        >
          <View
            className="p-1 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0,4)" }}
          >
            <Image
              className="h-16 w-16 rounded-full"
              source={require("../assets/images/restaurants/delivery3.jpg")}
            />
          </View>
          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white">Kamal Gautam</Text>
            <Text className="font-semibold text-white">Your rider</Text>
          </View>
          <View className="flex-row items-center space-x-3 mr-3">
            <TouchableOpacity className="bg-white p-2 rounded-full">
                <Icon.Phone fill={themeColors.bgColor(1)} strokeWidth={1} stroke={themeColors.bgColor(1)} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')} className="bg-white p-2 rounded-full">
                <Icon.X strokeWidth={4} stroke="red"/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DeliveryScreen;
