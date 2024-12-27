import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function WelcomeScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mi nombre es:</Text>
            <Text style={styles.name}>Brian Rodriguez</Text>
            <Text style={styles.title}>Carrera:</Text>
            <Text style={styles.name}>Desarrollo de Software</Text>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Drawer')}>
                    <Image source={require('../assets/images/puerta.png')}
                        style={styles.img} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 10,
    },
    name: {
        fontSize: 20,
        color: '#666666',
        marginBottom: 10,
    },
    img: {
        width: 100,
        height: 100
    }
})