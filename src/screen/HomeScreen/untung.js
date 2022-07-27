import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import util from '../../util';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';

// const defaultData = {
//   paid_off: [
//               {
//               untung: "930000"
//               }
//           ]

// };

const Untung = () => {
	// const [ data, setData ] = useState(defaultData);

	// const apiURL = util.Api.uri + 'accounts/dashboard';
	// axios.get(util.Api.uri+'accounts/keuntungan')
  //   .then((res) => {
  //     this.setState({
  //       paid_off: res.data.result.paid_off[0].untung
  //     })
  //     console.log(res.data);
  //   })

    // const apiURL = util.Api.uri + 'accounts/keuntungan';
    // axios
    //   .get(apiURL)
    //   .then((res) => {
    //     setData(res.data.result.paid_off[0].untung);
    //   })
    //   .catch((e) => console.log('Error: ', e));
	// props.navigation.addListener('focus', () => {
	// });

	return (
		<View style={style.content}>
			<View style={style.iconBG}>
				<Icon
					style={{ paddingHorizontal: 6, paddingVertical: 6 }}
					name="hand-holding-usd"
					size={40}
					color={'#ffffff'}
					solid
				/>
			</View>
			<View style={{ borderWidth: 0, justifyContent: 'center' }}>
				<View style={style.sub_content}>
					<Text style={style.text}>Total Untung</Text>
				</View>
				<View style={style.sub_content1}>
					<Text style={style.text}>Rp.{930000}</Text>
				</View>
			</View>
		</View>
	);
};

export default Untung;

const style = StyleSheet.create({
	content: {
		width: '100%',
		height: 100,
		borderRadius: 10,
		backgroundColor: util.Colors.Putih,
		paddingHorizontal: 10,
		paddingVertical: 10,
		marginBottom: 10,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	sub_content: {
		marginLeft: 8,
		paddingRight: 4,
		paddingBottom: 2
	},
	sub_content1: {
		marginLeft: 8
	},
	iconBG: {
		width: 50,
		height: 50,
		backgroundColor: util.Colors.Utama,
		marginRight: 10,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
		marginLeft: 8
	},
	text: {
		fontSize: 20,
		fontWeight: 'bold',
		color: util.Colors.Hitam
	}
});
