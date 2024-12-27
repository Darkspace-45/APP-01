import { Button, Modal, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react';

export default function Tarjeta4(props: any) {
    const [visible, setVisible] = useState(false);

    return (
        <TouchableOpacity onPress={() => setVisible(true)}>
            <Text>{props.datos.name.first}</Text>

            <Modal visible={visible} transparent={true} animationType="slide">
                <View style={styles.modal}>
                    <Image style={styles.img} source={{ uri: props.datos.picture.large }} />
                    <Text style={styles.text}>
                        {props.datos.name.first} {props.datos.name.last}
                    </Text>
                    <Text style={styles.text}>{props.datos.email}</Text>
                    <Button title="Regresar" onPress={() => setVisible(false)} />
                </View>
            </Modal>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'blue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    img: {
        width: 250,
        height: 250,
        resizeMode: 'cover',
        marginBottom: 20,
    },
    text: {
        fontSize: 20,
        color: 'white',
        marginBottom: 10,
        textAlign: 'center',
    },
});