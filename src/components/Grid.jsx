import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Grid = ({navigation}) => {



  const data=[
    {
      id:'1',name:'santu',no:"787644567878878"
      },
      {
          id:'2',name:'santuJJana',no:"78746546878"
          },
          {
              id:'3',name:'santumaji',no:"787878"
              },
              {
                  id:'4',name:'santuhazra',no:"787456878"
                  },
                  {
                      id:'5',name:'santuroy',no:"7878sdf78"
                      },
  ]
  return (
    <View>
      <Text>Grid</Text>
      <ScrollView>
        {data.map((item)=>(
          <View key={item.id}>
            <Text>{item.name}</Text>
            <Text>{item.no}</Text>
          </View>
        ))}
      </ScrollView>
      <Button title='Press' onPress={()=>navigation.navigate('About' ,{use:'Santu'})}/>
    </View>
  )
}

export default Grid

const styles = StyleSheet.create({})