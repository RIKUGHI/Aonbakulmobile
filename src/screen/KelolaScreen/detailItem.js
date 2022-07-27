import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const defaultValue = {
    index: 0,
}

const DetailItem = (props) => {
  return (
    <View>

      <View style={{flexDirection: 'row'}}>
        <Text style={{fontWeight: 'bold'}}>{props.nama}</Text>
        <Text style={{marginLeft: 10, }}>{props.cakra}</Text>
      </View>

    </View>
  )
}

export default DetailItem

const styles = StyleSheet.create({});