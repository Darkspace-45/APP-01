import { Alert, Image, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native'
import React, { useState } from 'react'

export default function Tarjeta2(props: any) {

    const [modalVisible, setModalVisible] = useState(false)

    function detalles(nombre: string) {
        setModalVisible(true)
    }

    return (
        <View>
            <TouchableOpacity style={styles.container}
                onPress={() => detalles(props.series.titulo)}>
                <Text style={styles.titulo}>{props.series.titulo}</Text>
                <View style={styles.fila}>
                    <Image source={{ uri: props.series.info.imagen }} style={styles.img} />
                    <Text style={styles.descripcion}>{props.series.descripcion}</Text>
                </View>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Detalles de la serie</Text>
                        <Image source={{ uri: props.series.info.imagen }} style={styles.modalImg} />
                        <Text style={styles.modalText}>La serie es: {props.series.titulo}</Text>
                        <Text style={styles.modalText}>Año: {props.series.anio}</Text>
                        <Text style={styles.modalText}>Temporadas: {props.series.metadata.temporadas}</Text>
                        <Text style={styles.modalText}>Creador: {props.series.metadata.creador}</Text>
                        <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.modalButtonText}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7ff4a3',
        margin: 10,
        borderRadius: 20
    },
    img: {
        height: 120,
        width: 120,
        resizeMode: "contain",
        borderRadius: 50
    },
    fila: {
        flexDirection: "row",
        padding: 10
    },
    descripcion: {
        flex: 1,
        padding: 10,
        fontSize: 15,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        padding: 10
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        width: '80%'
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center'
    },
    modalText: {
        fontSize: 16,
        color: '#666',
        padding: 10
    },
    modalButton: {
        backgroundColor: '#7ff4a3',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalButtonText: {
        fontSize: 16,
        color: '#fff'
    },
    modalImg: {
        height: 180,
        width: 180,
        resizeMode: "contain",
        borderRadius: 60,
        marginBottom: 20,
        alignSelf: 'center'
    },
})