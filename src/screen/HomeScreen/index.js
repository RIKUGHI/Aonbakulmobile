import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import React from 'react';
import util from '../../util';
import Pengguna from './pengguna';
import Untung from './untung';
import Grafik from './grafik';

const HomeScreen = () => {
	return (
		<View style={style.body}>
			<ScrollView style={style.container}>
				<Pengguna />
				<Untung />
				<Grafik />
			</ScrollView>
			<View />
		</View>
	);
};

const style = StyleSheet.create({
	body: {
		flex: 1,
		backgroundColor: util.Colors.TdkAktif
	},
	container: {
		paddingHorizontal: 10,
		paddingVertical: 10
		// alignItems: 'center'
	}
});

export default HomeScreen;
