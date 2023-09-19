import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace('Login')
        },3000)
    })
  return (
    <View style={styles.container}>
      <Text style={{fontSize:28, color:'black'}}>Welcome to Chat app 🗨️</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#BDF9F9'
    }
})