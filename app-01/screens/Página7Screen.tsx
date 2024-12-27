import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function Página7Screen() {
    const [kelvin, setKelvin] = useState(0)
    const [celsius, setCelsius] = useState(0)
    const [farenheit, setFarenheit] = useState(0)

    useEffect(() => {
        if (celsius > 100) {
            Alert.alert('Error', 'Has Superado el límite')
        }
    }, [celsius])

    const calcular = () => {
        setKelvin(celsius + 273.15)
        setFarenheit(((kelvin - 273.15) * 9 / 5) + 32)
    }


    return (
        <View style={styles.container}>
            <Text>Página7Screen</Text>
            <TextInput placeholder='Ingresar Temperatura'
                keyboardType='numeric'
                style={{ fontSize: 30, height: 50, width: "15%" }}
                onChangeText={(texto) => setKelvin(+texto)}
            />
            <Button title="Calcular" color={'green'} onPress={() => calcular()} />

            <View
                style={styles.linea}
            />

            <Text style={styles.txtRespuesta}>Temperatura en Celcius: {celsius}</Text>
            <Text style={styles.txtRespuesta}>Temperatura en Farenheit: {farenheit}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    linea: {
        width: "90%",
        height: 5,
        margin: 10,
        backgroundColor: "black"
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#6666',
        flex: 1
    },
    txtRespuesta: {
        fontSize: 25
    }
})