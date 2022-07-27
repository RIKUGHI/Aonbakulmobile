import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import util from '../../util';

const itemTransaksi = ({nama,bussinessName,startDate,endDate,paid,onKlik}) => {
  return (
    <View style={style.body}>
      <View style={style.container}>
        <Pressable onPress={onKlik}>
          <View style={style.content1}>
            <View>
              <Text style={style.text}>Nama Pengguna:</Text>
              {/* <Text style={style.text1}>Ahmad{nama}</Text> */}
              <Text style={style.text1}>{nama}</Text>
            </View>
            <View>
              <Text style={style.text}>Metode Bayar dan Total Bayar:</Text>
              <Text style={style.text1}>GoPay | {paid}</Text>
            </View>
            <View>
              <Text style={style.text}>Tanggal Mulai:</Text>
              <Text style={style.text1}>{startDate}</Text>
              <Text style={style.text}>Tanggal Berakhir:</Text>
              <Text style={style.text1}>{endDate}</Text>
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default itemTransaksi

const style = StyleSheet.create({
    body:{
      paddingBottom: 10,
      paddingHorizontal: 10,
    },
    container:{
      flexDirection: 'row',
      backgroundColor: util.Colors.Putih,
      padding: 10,
      borderRadius: 5,
      elevation: 5,
      // borderWidth: 1,
      paddingHorizontal: 6,
    },
    content1:{
      flexDirection: 'column',
      // borderWidth: 1,
    },
    content2:{
      flexDirection: 'column',
      paddingLeft: 10,
    },
    text: {
      fontSize: 12,
      fontWeight: 'bold',
      paddingLeft: 10,
      color: util.Colors.Hitam
    },
    text1: {
      fontSize: 12,
      paddingLeft: 20,
    },
  });