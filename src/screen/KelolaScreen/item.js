import { Pressable, StyleSheet, Text, View, StatusBar, Modal, Image } from 'react-native';
import React from 'react';
import util from '../../util';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AccountScreen from '././index';
import { useState } from 'react/cjs/react.production.min';

// https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200
const Item = ({ name, bussinessName, outletCount, onKlick, ispro }) => {
	return (
		<View style={style.container}>
			<StatusBar backgroundColor="#272727" barStyle="light-content" />
			<Pressable onPress={onKlick} style={style.item}>
				<Image style={style.img} source={{ uri: 'https://source.unsplash.com/100x100/?natureg' }} />
				<View style={style.titlepcc}>
					<Text style={style.titletext}>{name}</Text>
					<Text>Nama Usaha : {bussinessName}</Text>
					<Text>Jumlah Outlet : {outletCount}</Text>
					<View>{ispro}</View>
				</View>
			</Pressable>
		</View>
	);
};

export default Item;

const style = StyleSheet.create({
	container: {
		flex: 1
	},
	item: {
		padding: 20,
		marginVertical: 2,
		marginHorizontal: 6,
		backgroundColor: '#ffffff',
		borderRadius: 10,
		flexDirection: 'row',
		paddingHorizontal: 15,
		paddingVertical: 10,
		elevation: 5
	},
	img: {
		width: 75,
		height: 75,
		backgroundColor: util.Colors.Utama,
		borderRadius: 10
	},
	titletext: {
		fontSize: 16,
		fontWeight: 'bold'
	},
	titlepcc: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-start',
		paddingLeft: 15
	},
	icon: {
		justifyContent: 'center',
		alignItems: 'flex-end'
		// borderColor: 'red',
		// borderWidth: 1,
	}
});
