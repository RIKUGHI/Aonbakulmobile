import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React, { Component } from 'react';
import util from '../../util';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import { LineChart } from 'react-native-chart-kit';

// const defaultData = {
// 	isLoading: true,
// 	total_users: 0,
// 	new_users: [
// 		{
// 			created_at: '',
// 			total: 0
// 		}
// 	]
// };

// const Produk = () => {
// 	const [ data, setData ] = useState(defaultData);

// 	const apiURL = util.Api.uri + 'accounts/dashboard';
// 	axios
// 		.get(apiURL)
// 		.then((res) => {
// 			setData(res.data.result);
// 		})
// 		.catch((e) => console.log('Error: ', e));
// 	return (
// 		<View style={style.content}>
// 			<Text>halooo</Text>
// 			<View>
// 				<LineChart
// 					data={{
// 						labels: [
// 							// '2021-12-27',
// 							// '2021-12-30',
// 							// '2022-01-10',
// 							// '2022-01-11',
// 							// '2022-01-12',
// 							// '2022-01-13',
// 							// '2022-04-04',
// 							// '2022-05-23',
// 							// '2022-06-08'
// 						],
// 						datasets: [
// 							{
// 								data: [
// 									Math.random() * 100,
// 									Math.random() * 100,
// 									Math.random() * 100,
// 									Math.random() * 100,
// 									Math.random() * 100,
// 									Math.random() * 100,
// 									Math.random() * 100,
// 									Math.random() * 100,
// 									Math.random() * 100
// 								]
// 							}
// 						]
// 					}}
// 					width={Dimensions.get('window').width - 40} // from react-native
// 					height={410}
// 					// yAxisLabel="$"
// 					// yAxisSuffix=""
// 					yAxisInterval={1} // optional, defaults to 1
// 					chartConfig={{
// 						// backgroundColor: util.Colors.Putih,
// 						backgroundGradientFrom: util.Colors.Putih,
// 						backgroundGradientTo: util.Colors.Putih,
// 						decimalPlaces: 2, // optional, defaults to 2dp
// 						color: (opacity = 1) => `rgba(83,84,215, ${opacity})`,
// 						labelColor: (opacity = 1) => `rgba(0, 0, 20, ${opacity})`,
// 						style: {
// 							borderRadius: 16
// 						},
// 						propsForDots: {
// 							r: '6',
// 							strokeWidth: '2',
// 							stroke: util.Colors.Utama
// 						}
// 					}}
// 					bezier
// 					style={{
// 						marginHorizontal: 8,
// 						borderRadius: 10
// 					}}
// 					verticalLabelRotation="75"
// 				/>
// 			</View>
// 		</View>
// 	);
// };

// export default Produk;

export default class Grafik extends Component {
	state = {
		isLoading: true,
		total_users: 0,
		new_users: [
			{
				created_at: '',
				total: 0
			}
		]
	};
	componentDidMount() {
		axios
			.get(util.Api.uri + 'accounts/dashboard')
			.then((r) => {
				this.setState({
					isLoading: false,
					total_users: r.data.result.total_users,
					new_users: r.data.result.new_users
				});
			})
			.catch((e) => console.log(e));
	}
	render() {
		return (
			<View style={style.content}>
				<Text style={style.text}>Grafik Pengguna Baru</Text>
				<View
					style={{
						// borderWidth: 1,
						marginTop: 20
					}}
				>
					<LineChart
						data={{
							labels: this.state.new_users.map((d) => d.created_at),

							datasets: [
								{
									data: this.state.new_users.map((d) => d.total)
								}
							]
						}}
						width={Dimensions.get('window').width - 40} // from react-native
						height={410}
						// yAxisLabel="$"
						// yAxisSuffix=""
						yAxisInterval={1} // optional, defaults to 1
						chartConfig={{
							// backgroundColor: ,
							backgroundGradientFrom: util.Colors.Putih,
							backgroundGradientTo: util.Colors.Putih,
							decimalPlaces: 0, // optional, defaults to 2dp
							color: (opacity = 1) => `rgba(83,84,215, ${opacity})`,
							labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
							style: {
								borderRadius: 16
							},
							propsForDots: {
								r: '6',
								strokeWidth: '2',
								stroke: util.Colors.Utama
							}
						}}
						bezier
						style={{
							marginHorizontal: 4,
							borderRadius: 10
						}}
						verticalLabelRotation="75"
					/>
				</View>
			</View>
		);
	}
}

const style = StyleSheet.create({
	content: {
		flex: 1,
		height: 500,
		borderRadius: 10,
		backgroundColor: util.Colors.Putih,
		// paddingHorizontal: 10,
		// paddingVertical: 10,
		marginBottom: 10,
		flexDirection: 'column',
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
		color: util.Colors.Hitam,
		marginTop: 20
	}
});
