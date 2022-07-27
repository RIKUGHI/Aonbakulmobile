import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Item = ({title}) => {
    return (
        <View>
        <StatusBar backgroundColor="#272727" barStyle="light-content" />
        <TouchableOpacity> 
        <View style={style.img} />
        <View>
          <Text>{title}</Text>
          {/* <Text>Nama Pengguna :</Text> */}
          <Text>Nama Usaha :</Text>
          {/* <Text>Jumlah Outlet :</Text>
          <Text>Email :</Text>
          <Text>Telp :</Text> */}
        </View>
        <View>
          <Icon name="eye" size={30} color={util.Colors.Utama} solid/>
        </View>
        </TouchableOpacity>
      </View>
    );
  }

  const style = StyleSheet.create({
    img: {
      width: 100, 
      height: 100, 
      backgroundColor: util.Colors.Utama,
      borderRadius: 10,
    },
  });

export default Item