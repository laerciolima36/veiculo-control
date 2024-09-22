import React, { useRef, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Animated } from 'react-native';

function Loading({ visible }) {

  const animationValue = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animationValue, {
          toValue: 200, // Aumenta para 200
          duration: 1000, // Duração de 1 segundo
          useNativeDriver: false, // Como estamos animando o tamanho, não podemos usar o driver nativo
        }),
        Animated.timing(animationValue, {
          toValue: 100, // Volta para 100
          duration: 1000, // Duração de 1 segundo
          useNativeDriver: false,
        }),
      ])
    ).start(); // Inicia a animação em loop
  };

  return (
    <View style={styles.loading}>

      <Animated.View
        style={[
          styles.carregando,
          {
            width: animationValue, // Anima a largura
            height: animationValue, // Anima a altura
          },
        ]}
      />
      <Text style={styles.text}>Carregando...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    backgroundColor: '#cccccc',
    position: 'absolute', // Posição absoluta para sobrepor os outros componentes
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    //backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor de fundo com opacidade
    justifyContent: 'center',
    alignItems: 'center',
  },
  carregando: {
    height: 100,
    width: 100,
    backgroundColor: '#2196F3',
    borderRadius: 100,
    textAlignVertical: 'center'
  },
  text: {
    color: 'black',
    fontSize: 18
  }
});

export default Loading;