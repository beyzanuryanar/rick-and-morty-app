import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Characters, EpisodeDetail, Episodes, CharacterDetail } from "../screens";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { color } from "../config/color";

const EpisodeStack = createNativeStackNavigator();
const CharacterStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const EpisodeNavigation = () => (
  <EpisodeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: color.black,
      },
      headerTintColor: color.primary,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}>
    <EpisodeStack.Screen name="Episodes" component={Episodes} />
    <EpisodeStack.Screen options={{ headerTitle: "Episode Detail" }} name="EpisodeDetail" component={EpisodeDetail} />
  </EpisodeStack.Navigator>
);

const CharacterNavigation = () => (
  <CharacterStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: color.black,
      },
      headerTintColor: color.primary,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}>
    <CharacterStack.Screen name="Characters" component={Characters} />
    <CharacterStack.Screen options={{ headerTitle: "Character Detail" }} name="CharacterDetail"
                           component={CharacterDetail} />
  </CharacterStack.Navigator>
);

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: color.primary,
          inactiveTintColor: color.white,
        }}
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: color.black,
          },
        }}>
        <Tab.Screen options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="television-classic" color={color} size={size} />
          ),
        }} name="Episodes" component={EpisodeNavigation} />
        <Tab.Screen options={{
          tabBarLabel: "Characters",
          tabBarIcon: ({ color, size }) => (
            <Icon name="card-account-details" color={color} size={size} />
          ),
        }} name="Settings" component={CharacterNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
