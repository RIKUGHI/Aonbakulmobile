import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import util from '../../util';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AccountScreen = () => {
	return (
		<View style={{ flex: 1, backgroundColor: util.Colors.TdkAktif }}>
			<View style={styles.container}>
				<Image style={styles.img} source={{ uri: 'https://source.unsplash.com/100x100/?natureg' }} />
				<View style={{ paddingVertical: 20 }}>
					<Text style={styles.text}>Nama Admin: Chakra</Text>
					<Text style={styles.text}>Email: bagas@gmail.com</Text>
					<Text style={styles.text}>Password: **********</Text>
				</View>

				{/* <View
					style={{
						width: 200,
						height: 40,
						borderRadius: 10,
						backgroundColor: util.Colors.TdkAktif,
						marginTop: 10
					}}
				/> */}
			</View>
		</View>
	);
};

export default AccountScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFFFFF',
		// borderColor: 'red',
		// borderWidth: 2,
		flex: 1,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'flex-start',
		marginHorizontal: 10,
		marginVertical: 10,
		paddingHorizontal: 10,
		paddingVertical: 10,
		elevation: 10
	},
	text: {
		fontSize: 16,
		fontWeight: '700'
	},
	img: {
		marginHorizontal: 10,
		marginVertical: 10,
		width: 150,
		height: 150,
		backgroundColor: util.Colors.Utama,
		borderRadius: 10
	}
});
