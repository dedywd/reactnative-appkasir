import React from "react";
import { View, Text,Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Screen1 from './KasirAbout.js';
import Screen2 from './KasirDataBarang.js';
import Screen3 from './KasirPenjualan.js';
import MainScreen from './AppKasir1.js';
const AppNavigator = createStackNavigator(
 {
 Utama: MainScreen,
 Layar1: Screen1,
 Layar2: Screen2,
 Layar3: Screen3,
 },
 {
 initialRouteName: "Utama"
 }
);
