import { StyleSheet, Text, View, StatusBar, TextInput, Modal, Pressable, Alert, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import util from '../../util';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Item from './item';
import axios from 'axios';
import DetailItem from './detailItem';

const defaultData = {
	key_search: 'Semua',
	first_data: 0,
	active_page: 0,
	total_pages: 0,
	results: [
		{
			id_owner: 17,
			created_at: '0000-00-00',
			business_name: 'Loading.....',
			owner_name: 'Loading.....',
			owner_code: 'OBTE-00017',
			telp: '0',
			email: 'Loading.....',
			today: '0000-00-00',
			is_pro: false,
			start: null,
			end: null,
			total_products: 0,
			outlets: [
				{
					id_owner: 17,
					id_outlet: 30,
					owner_code: 'OBTE-00017',
					outlet_name: 'Loading.....',
					city: 'Loading.....',
					address: 'Loading.....',
					telp: '0'
				}
			]
		}
	]
};

const KelolaScreen = (props) => {
	const [ detailindex, setDeatilindex ] = useState(0);
	const [ data, setData ] = useState(defaultData);
	const [ modalVisible, setModalVisible ] = useState(false);

	props.navigation.addListener('focus', () => {
		const apiURL = util.Api.uri + 'accounts';
		axios
			.get(apiURL)
			.then((res) => {
				setData(res.data.result);
			})
			.catch((e) => console.log('Error: ', e));
	});

	return (
		<View style={style.container}>
			<View style={{ padding: 6 }}>
				<View style={style.inputtextBG}>
					<TextInput
						style={style.inputText}
						onChangeText={(value) => {
							const apiURL = util.Api.uri + 'accounts?q=' + value;
							axios
								.get(apiURL)
								.then((res) => {
									console.log(data);
									setData(res.data.result);
								})
								.catch((e) => console.log('Error: ', e));
						}}
					/>
					<View style={style.iconBG}>
						<Icon style={style.icon} name="search" size={20} color={'#ffffff'} solid />
					</View>
				</View>
			</View>
			<FlatList
				style={{ flex: 1, marginTop: -2 }}
				data={data.results}
				renderItem={({ item, index }) => (
					<Item
						name={item.owner_name}
						bussinessName={item.business_name}
						outletCount={item.outlets.length}
						// ispro={()}
						onKlick={() => {
							setModalVisible(!modalVisible);
							console.log(index);
							setDeatilindex(index);
						}}
					/>
				)}
			/>
			<Modal
				animationType="fade"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert('Modal has been closed.');
					setModalVisible(!modalVisible);
				}}
			>
				<View style={style.centeredView}>
					<View style={style.modalView}>
						<Image style={style.image} source={{ uri: 'https://source.unsplash.com/100x100/?natureg' }} />

						<View
							style={{
								// borderWidth: 1,
								width: '100%'
							}}
						>
							<DetailItem nama={'Nama Pengguna :'} cakra={data.results[detailindex].owner_name} />
							<DetailItem nama={'Nama Usaha :'} cakra={data.results[detailindex].business_name} />
							<DetailItem nama={'Total Produk :'} cakra={data.results[detailindex].total_products} />
							<DetailItem nama={'Jumlah Outlet :'} cakra={data.results[detailindex].outlets.length} />
							<DetailItem nama={'Email :'} cakra={data.results[detailindex].email} />
							<DetailItem nama={'No. Telp :'} cakra={data.results[detailindex].telp} />
							<DetailItem nama={'Tanggal Mulai :'} cakra={data.results[detailindex].start} />
							<DetailItem nama={'Tanggal Berakhir :'} cakra={data.results[detailindex].end} />
						</View>
						<Pressable
							style={[ style.button, style.buttonClose ]}
							onPress={() => setModalVisible(!modalVisible)}
						>
							<Text style={style.textStyle}>Tutup</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
		</View>
	);
};

export default KelolaScreen;

const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: util.Colors.TdkAktif
	},
	inputtextBG: {
		// justifyContent: 'space-evenly',
		backgroundColor: '#ffffff',
		height: 50,
		paddingVertical: 6,
		flexDirection: 'row',
		borderRadius: 10,
		elevation: 5
	},
	inputText: {
		flex: 1,
		maxWidth: 300,
		marginLeft: 4
	},
	image: {
		backgroundColor: 'white',
		borderWidth: 1,
		width: '80%',
		height: 200,
		marginHorizontal: 50,
		borderRadius: 10,
		marginBottom: 10
	},
	iconBG: {
		justifyContent: 'center',
		backgroundColor: util.Colors.Utama,
		borderRadius: 8
	},
	icon: {
		paddingVertical: 8,
		paddingHorizontal: 9
	},
	itemStyle: {
		padding: 15
	},
	textInputStyle: {
		height: 40,
		borderWidth: 1,
		paddingLeft: 20,
		margin: 5,
		borderColor: util.Colors.Utama,
		backgroundColor: 'white'
	},
	//Batas Copy
	centeredView: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.5)'
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 20,
		alignItems: 'center',
		// flex: 1,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
			paddingVertical: 10
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
	button: {
		borderRadius: 5,
		padding: 10,
		elevation: 2,
		marginTop: 50,
		width: 100
	},
	buttonOpen: {
		backgroundColor: '#F194FF'
	},
	buttonClose: {
		backgroundColor: util.Colors.Utama
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center'
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center'
	}
});
