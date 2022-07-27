import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
// import Logo from '';

const SplashScreen = ({ navigation }) => {
	useEffect(() => {
		setTimeout(() => {
			navigation.replace('Login');
		}, 2500);
	});
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff' }}>
			<Image style={style.Logo} source={require('../../img/logo1.png')} />
		</View>
	);
};

export default SplashScreen;

const style = StyleSheet.create({
	Logo: {
		width: 250
		// height: 100
	}
});
