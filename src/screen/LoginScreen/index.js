import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import util from '../../util';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const ActionInputData = ({ placeholder, icon }) => {
	return (
		<View style={{ paddingBottom: 20 }}>
			<View style={style.textinputBG}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Icon style={{ paddingRight: 10 }} name={icon} size={30} color={util.Colors.Utama} solid />
					<TextInput style={style.textinput} placeholder={placeholder} />
				</View>
			</View>
		</View>
	);
};

const KlikBTN = ({ onKlick }) => {
	return (
		<Pressable style={style.button} onPress={onKlick}>
			<Text style={style.textStyle}>Login</Text>
		</Pressable>
	);
};

const KlikTXT = ({ onPress }) => {
	return (
		<Pressable style={[ style.press ]} onPress={onPress}>
			<Text style={{ fontWeight: 'bold', color: util.Colors.Utama }}>Daftar</Text>
		</Pressable>
	);
};

const LoginScreen = ({ navigation }) => {
	const pindahHalaman = (screen) => {
		navigation.navigate(screen);
	};
	return (
		<View style={style.body}>
			<View style={style.head}>
				<Text style={style.texthead}>Login</Text>
			</View>
			<View style={style.container}>
				<View style={{ flex: 1, paddingHorizontal: 30, paddingVertical: 30, borderWidth: 0 }}>
					{/* <ActionInputData icon={'envelope'} placeholder="Email" />
					<ActionInputData icon={'lock'} placeholder="Password" /> */}
					<View style={{ paddingBottom: 20 }}>
						<View style={style.textinputBG}>
							<View style={{ flexDirection: 'row', alignItems: 'center' }}>
								<FontAwesomeIcon style={{ paddingRight: 10 }} icon={faEnvelope} size={30} color={util.Colors.Utama} solid />
								<TextInput style={style.textinput} placeholder="email" />
							</View>
						</View>
					</View>
					<View style={{ paddingBottom: 20 }}>
						<View style={style.textinputBG}>
							<View style={{ flexDirection: 'row', alignItems: 'center' }}>
								<FontAwesomeIcon style={{ paddingRight: 10 }} icon={faLock} size={30} color={util.Colors.Utama} solid />
								<TextInput style={style.textinput} placeholder="password" />
							</View>
						</View>
					</View>
					<KlikBTN
						onKlick={() => {
							pindahHalaman('Main');
						}}
					/>
					{/* <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
						<Text style={{ fontSize: 15, marginTop: 10, color: util.Colors.Hitam }}>
							Belum Memilki Akun?
						</Text>
						<KlikTXT
							onPress={() => {
								pindahHalaman('Regis');
							}}
						/>
					</View> */}
				</View>
			</View>
		</View>
	);
};

export default LoginScreen;

const style = StyleSheet.create({
	body: {
		backgroundColor: util.Colors.Utama,
		flex: 1
	},
	container: {
		backgroundColor: util.Colors.Putih,
		// flex:1,
		height: 280,
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
		// borderColor: 'red',
		// borderWidth: 1
	},
	text: {
		fontSize: 20,
		fontWeight: 'bold',
		color: util.Colors.Utama
	},
	button: {
		paddingTop:10,
		borderRadius: 20,
		padding: 10,
		elevation: 2,
		backgroundColor: util.Colors.Utama
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
		flex: 1
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
