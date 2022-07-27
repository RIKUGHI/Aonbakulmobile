import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, {useState} from 'react'
import Card from './card';
import axios from 'axios';
import util from '../../util';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ItemTransaksi from './item';
import { FlatList } from 'react-native-gesture-handler';

const defaultData = {
  key_search: "Semua",
  first_data: 0,
  active_page: 0,
  total_pages: 0,
  results: [
    {
      date: "2022-05-13",
      total: 30000,
      data: [
        {
          id_history_payment: 27,
          id_owner: {
            id_owner: 12,
            created_at: "2021-12-30",
            business_name: "apa aja ada",
            owner_name: "chakra",
            owner_code: "OBAA-00012",
            telp: "123",
            email: "chakra@gmail.com",
            is_pro: true,
            start: "2022-05-13 11:31:04",
            end : "2022-06-13 11:31:04"
          },
          date: "2022-05-13",
          start: "2022-05-13 11:31:04",
          end: "2022-06-13 11:31:04",
          paid_off: 30000
        }
      ]
    }
  ]
}

const TransaksiScreen = (props) => {
  
  const [data, setData] = useState(defaultData);

  props.navigation.addListener('focus', () => {
    const apiURL= util.Api.uri+'payment';
    axios.get(apiURL)
    .then(res => {
      setData(res.data.result)
    })
    .catch(e => console.log('Error: ',e))
  })

  return (
    <View style={style.container}>
      <View style={{alignItems: 'center', marginBottom: 8}}>
        <Text style={style.text}>Total Transaksi: {data.results.length} Transaksi</Text>
      </View>
      <FlatList style={{flex: 1}}
      data={data.results}
      renderItem={({item}) => (
        // <View style={{flex: 1,backgroundColor: util.Colors.Putih}}>
        <View>
        <Card
          tanggal={item.date}
          total={item.total}
          // name={item.data.}
          
          onKlik={() => {
            console.log(index);
          }}
        />
        <FlatList style={style.itemList}
          data={item.data}
          renderItem={({item}) => (
            <ItemTransaksi
            // nama={item.id_history_payment}
            nama={item.id_owner.owner_name}
            paid={item.paid_off}
            startDate={item.start}
            endDate={item.end}
            />
          )}
        />
        </View>
      )}
      />
      
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 10,
    backgroundColor: util.Colors.TdkAktif
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: util.Colors.Utama,
    backgroundColor: util.Colors.Putih,
    borderRadius: 5,
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  inputtextBG:{
    backgroundColor: '#ffffff',
    height: 50,
    paddingVertical: 6,
    flexDirection: 'row',
    borderRadius: 4,
    elevation: 5,
  },
  inputText:{
    flex: 1,
    maxWidth: 290,
    marginLeft: 6,
    // borderWidth: 1,
  },
  iconBG:{
    justifyContent: 'center',
    backgroundColor: util.Colors.Utama, 
    borderRadius: 8,
  },
  icon:{
    paddingVertical: 8,
    paddingHorizontal: 9,
  },
  itemCard:{
    elevation: 5,
  },
  itemList:{
    paddingTop: 6,
  },
});

export default TransaksiScreen;