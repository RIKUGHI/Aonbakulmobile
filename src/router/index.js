import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen, LoginScreen, RegisterScreen, HomeScreen, KelolaScreen, AccountScreen } from '../screen';
import Main from '../screen/Main';

const Stack = createNativeStackNavigator();

const Router = () => {
	return (
		<Stack.Navigator initialRouteName="Splash">
			<Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
			<Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
			<Stack.Screen name="Regis" component={RegisterScreen} options={{ headerShown: false }} />
			<Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
			{/* <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Kelola" component={KelolaScreen} />
            <Stack.Screen name="Account" component={AccountScreen} /> */}
		</Stack.Navigator>
	);
};

export default Router;
