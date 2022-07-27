import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Router from './router';
import Main from './screen/Main';

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Router />
			{/* <Main /> */}
		</NavigationContainer>
	);
};

export default App;
