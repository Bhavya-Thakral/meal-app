import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Heading = ({heading}) => {
  return (
    <View style={styles.headView} >
      <Text style={styles.head} >{heading}</Text>
    </View>
  )
}

export default Heading

const styles = StyleSheet.create({
    headView:{
width:"100%",
alignItems:"center",
margin:10
    },
    head:{
        fontSize:20,
        fontWeight:"900",
        color:"#191a"
    }
})