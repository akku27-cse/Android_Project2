import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContactItem = ({name,no}) => {
  return (
    <View>
      <Text style={{fontSize:40}}>{name}</Text>
      <Text style={{fontWeight:'bold', fontSize:25}}>{no}</Text>
    </View>
  )
}

export default ContactItem

const styles = StyleSheet.create({})