import { Button, ImageBackground, StyleSheet, Text, TextInput, View, Alert } from 'react-native'
import React, { useState } from 'react'
import { parse } from '@babel/core'

export default function Pagina1Screen() {
    const [Nombre, setNombre] = useState("")
    const [Edad, setEdad] = useState(0)
    const [Ciudad, setCiudad] = useState("")
    function datosAlert() {
        if (Edad >= 18) {
            Alert.alert('Mensaje', `El usuario es mayor de edad. \n Se Llama:${Nombre} \n Su edad es: ${Edad} \n Vive en: ${Ciudad}`);
        } else {
            Alert.alert('Mensaje', `El usuario no es mayor de edad. \n Se Llama:${Nombre} \n Su edad es: ${Edad} \n Vive en: ${Ciudad}`);
        }
        limpiar();
    }

    function limpiar() {    
        setNombre("")    
        setEdad(0)        
        setCiudad("")    
    }

    return (
        <ImageBackground source={{ uri: "https://4kwallpapers.com/images/walls/thumbs_3t/20212.jpg" }}
            style={styles.img}>
            <TextInput placeholder="Ingresar Nombre"
                placeholderTextColor={"#ffff"} style={styles.textInput}
                onChangeText={(texto) => { setNombre(texto) }} value={Nombre}/>
            <TextInput placeholder="Ingresar Edad"
                placeholderTextColor={"#ffff"} style={styles.textInput}
                keyboardType="numeric"
                onChangeText={(texto) => setEdad(parseInt(texto))} value={Edad.toString()} />
            <TextInput placeholder="Ingresar Ciudad"
                placeholderTextColor={"#ffff"} style={styles.textInput}
                onChangeText={(texto) => setCiudad(texto)} value={Ciudad}/>
            <Button title="Ingresar"
                onPress={() => datosAlert()} />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    img: {
        flex: 1,
    },
    textInput: {
        height: 40,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 10,
        borderRadius: 10,
        textAlign: "center",
    },
})