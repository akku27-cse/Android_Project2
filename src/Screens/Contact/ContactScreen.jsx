// import { FlatList, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import {user} from './userContactInfo.js'
// import ContactItem from '../../components/ContactItem.jsx'
// const ContactScreen = () => {
//     const renderItem=({item})=><ContactItem name={item.name} no={item.no}/>

//     }
//   return (
//    <FlatList data={user}
//    renderItem={renderItem}
//    keyExtractor={(item)=>{item.id}}
//    />
//   )
// }

// export default ContactScreen

// const styles = StyleSheet.create({})

import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { user } from './userContactInfo.js'
import ContactItem from '../../components/ContactItem.jsx'

const ContactScreen = () => {
    const renderItem=({item})=><ContactItem name={item.name} no={item.no}/>
  return (
    <View>
        <Text style={{color:'blue', fontWeight:'bold', fontSize:60}}>Contact</Text>
    
    <FlatList data={user}
    renderItem={renderItem}
    keyExtractor={(item)=>{item.id}}
  
    
    />
    </View>
  )
}

export default ContactScreen

