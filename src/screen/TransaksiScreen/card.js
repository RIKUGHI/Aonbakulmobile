import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import util from '../../util';
import ItemTransaksi from './item';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { FlatList } from 'react-native-gesture-handler';

const Card = ({ tanggal, total }) => {
	return (
		<View
			style={{
				backgroundColor: '#ffffff',
				flex: 1,
				borderRadius: 5,
				elevation: 5
			}}
		>
			<View style={style.content}>
				<Text style={style.content_day}>
					{tanggal} | Rp.{total}
				</Text>
			</View>
		</View>
	);
};

export default Card;

const style = StyleSheet.create({
	content: {
		paddingVertical: 5,
		paddingHorizontal: 6
	},
	content_day: {
		fontSize: 14,
		fontWeight: 'bold',
		paddingLeft: 4,
		color: util.Colors.Utama
	},
	content1: {
		flexDirection: 'column'
		// borderWidth: 1,
	},
	container: {
		flexDirection: 'row',
		backgroundColor: util.Colors.Putih,
		padding: 10,
		borderRadius: 5,
		elevation: 5,
		// borderWidth: 1,
		paddingHorizontal: 6
	},
	body: {
		paddingBottom: 10,
		paddingHorizontal: 10
	}
});
