import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

function topo(){
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../imagens/images.jpeg')} />
            <Text style={styles.sectionTitle}>Controle de Uso de Veiculos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',
      backgroundColor: '#000144'
    },
    sectionTitle: {
      fontSize: 30,
      fontWeight: '500',
      color: 'white',
      marginBottom: 15
    },
    image: {
        width: 200,  // largura da imagem
        height: 150, // altura da imagem
        resizeMode: 'contain', // ajuste da imagem dentro do contêiner
      },
  });

export default topo;