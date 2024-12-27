import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

export default function Tarjeta (props: any) {
  console.log(props.informacion.name)

  function detalles( nombre: string ) {
    Alert.alert('Detalles ⚠️', 'El personaje es: ' + nombre)
  }

  return (
      <TouchableOpacity style={styles.container} 
      onPress={() => detalles(props.informacion.name)}>
      <Text>{props.informacion.name}</Text>
      <View style={styles.fila}>
        <Image source={{uri: props.informacion.image}} style={styles.img}/>
        <Text style={styles.descripcion}>{props.informacion.description}</Text>
      </View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#6666',
    margin:10,
    borderRadius:10
  },
  img:{
    height:100,
    width:100,
    resizeMode:"contain",
  },
  fila:{
    flexDirection:"row"
  },
  descripcion: {
      flex: 1,
      padding: 10,
  },
  
})