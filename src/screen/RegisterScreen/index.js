import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import util from '../../util';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const ActionInputData = ({ placeholder, icon }) => {
	return (
		<View style={{ paddingBottom: 15 }}>
			<View style={style.textinputBG}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Icon style={{ paddingRight: 10 }} name={icon} size={30} color={util.Colors.Utama} solid />
					<TextInput placeholder={placeholder} style={style.textinput} />
				</View>
			</View>
		</View>
	);
};

const KlikTXT = ({ onPress }) => {
	return (
		<Pressable style={[ style.press ]} onPress={onPress}>
			<Text style={{ fontWeight: 'bold', color: util.Colors.Utama }}>Login</Text>
		</Pressable>
	);
};

const KlikBTN = ({ onKlick }) => {
	return (
		<Pressable style={[ style.button, style.buttonClose ]} onPress={onKlick}>
			<Text style={style.textStyle}>Daftar</Text>
		</Pressable>
	);
};

const RegisterScreen = ({ navigation }) => {
	const pindahHalaman = (screen) => {
		navigation.navigate(screen);
	};
	return (
		<View style={style.body}>
			<View style={style.head}>
				<Text style={style.texthead}>Daftar</Text>
			</View>
			<View style={style.container}>
				<View style={{ flex: 1, paddingHorizontal: 30, paddingVertical: 30, borderWidth: 0 }}>
					<ActionInputData placeholder="Kode" icon={'user'} />
					<ActionInputData placeholder="Nama Admin" icon={'user'} />
					<ActionInputData placeholder="Email" icon={'envelope'} />
					<ActionInputData placeholder="Password" icon={'lock'} />
					<KlikBTN
					// onKlick={() => {
					// 	// setModalVisible(!modalVisible);
					// 	console.log('saya dipencet saat daftar');
					// 	// setDeatilindex(index);
					// }}
					// onKlick={() => alert('Saya sudah diklik')}
					/>
					<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
						<Text style={{ fontSize: 15, marginTop: 10, color: util.Colors.Hitam }}>
							Sudah Memilki Akun?
						</Text>
						<KlikTXT
							onPress={() => {
								pindahHalaman('Login');
							}}
						/>
					</View>
				</View>
			</View>
		</View>
	);
};

export default RegisterScreen;

const style = StyleSheet.create({
	body: {
		backgroundColor: util.Colors.Utama,
		flex: 1
	},
	container: {
		flex: 1,
		backgroundColor: util.Colors.Putih,
		width: '100%',
		height: 300,
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20
		// borderColor: 'red',
		// borderWidth: 1
	},
	text: {
		fontSize: 20,
		fontWeight: 'bold',
		color: util.Colors.Utama
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
		width: 300,
		height: 40
	},
	// buttonOpen: {
	// 	backgroundColor: '#F194FF'
	// },
	buttonClose: {
		backgroundColor: util.Colors.Utama
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center'
	},
	press: {
		marginTop: 11,
		marginLeft: 4
	},
	tinyLogo: {
		width: 250,
		height: 100
	},
	head: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 250
		// flex: 1
		// borderColor: 'red',
		// borderWidth: 1,
	},
	texthead: {
		fontWeight: 'bold',
		fontSize: 20,
		color: util.Colors.Putih,
		textTransform: 'uppercase'
	},
	textinputBG: {
		backgroundColor: '#ffffff',
		alignItems: 'center',
		paddingVertical: 10,
		elevation: 4,
		borderRadius: 20
	},
	textinput: {
		justifyContent: 'center',
		borderWidth: 0,
		width: 222,
		color: util.Colors.Hitam
	},
	textBTN: {
		fontWeight: 'bold',
		color: util.Colors.Utama
	}
});
