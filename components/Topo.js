import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

function topo() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../imagens/logo.png')} />
      <Text style={styles.sectionTitle}>Controle de Uso de Veiculos</Text>
      <Image style={styles.road} source={require('../imagens/road.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    //backgroundColor: '#000144'
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    color: 'white',
    padding: 10,
    backgroundColor: '#474747',
    width: '100%'
  },
  image: {
    width: 200,  // largura da imagem
    height: 150, // altura da imagem
    resizeMode: 'contain', // ajuste da imagem dentro do contêiner
  },
  road: {
    height: 90, // altura da imagem
    resizeMode: 'contain', // ajuste da imagem dentro do contêiner
  },
});

export default topo;