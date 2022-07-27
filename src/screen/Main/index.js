import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screen/HomeScreen';
import AccountScreen from '../../screen/AccountScreen';
import KelolaScreen from '../../screen/KelolaScreen';
import TransaksiScreen from '../../screen/TransaksiScreen';
import util from '../../util';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUsers, faClipboard, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

const Main = () => {
	return (
		<Tab.Navigator
			initialRouteName="Beranda"
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color }) => {
					// return <View style={{backgroundColor: 'red', width: 10, height: 10_}} />
					// let iconName;
					let f;
					if (route.name === 'Beranda') {
						f = focused ? faHome : faHome;
					} else if (route.name === 'Kelola') {
						f = focused ? faUsers : faUsers;
					} else if (route.name === 'Transaksi') {
						f = focused ? faClipboard : faClipboard;
					} else if (route.name === 'Akun') {
						f = focused ? faUser : faUser;
					}
					return <FontAwesomeIcon icon={f} size={25} color={color} />;
				},
				tabBarActiveTintColor: util.Colors.Utama,
				tabBarInactiveTintColor: util.Colors.TdkAktif
			})}
		>
			<Tab.Screen name="Beranda" component={HomeScreen} options={{ headerShown: false }} />
			<Tab.Screen name="Kelola" component={KelolaScreen} options={{ headerShown: false }} />
			<Tab.Screen name="Transaksi" component={TransaksiScreen} options={{ headerShown: false }} />
			<Tab.Screen name="Akun" component={AccountScreen} options={{ headerShown: false }} />
		</Tab.Navigator>
	);
};

export default Main;

const style = StyleSheet.create({});
