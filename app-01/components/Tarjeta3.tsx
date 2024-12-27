import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';

export default function Tarjeta3({ datos }: any) {
    function detalles(name: string) {
        Alert.alert('Detalles ', 'El personaje es: ' + name + ' y su ocupación es: ' + datos.occupation)
    }
    return (
        <View style={styles.tarjeta}>
            <TouchableOpacity onPress={() => detalles(datos.name.first)} style={styles.tarjetaTouchable}>
                <Text style={styles.titulo}>{datos.name.first}</Text>
                <Text style={styles.descripcion}>{datos.occupation}</Text>
                <Image style={styles.img} source={{ uri: datos.images.main }} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    tarjeta: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    tarjetaTouchable: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        padding: 10,
    },
    descripcion: {
        fontSize: 16,
        color: '#666',
        padding: 10,
    },
    img: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        borderRadius: 10,
        alignSelf: 'center',
    },
});