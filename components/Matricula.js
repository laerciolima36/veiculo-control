import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import BtnProximo from './BtnProximo';

function Matricula(){

  const [matricula, setMatricula] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Insira sua Matricula</Text>
            <TextInput style={styles.input} keyboardType="numeric" value={matricula} onChangeText={setMatricula}></TextInput>
            <BtnProximo/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      height: '660px',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 100
    },
    sectionTitle: {
      fontSize: 35,
      fontWeight: '700',
      color: 'black',
      marginBottom: 20
    },
    input: {
      height: 65,
      width: 200,
      fontSize: 40,
      textAlign: 'center',
      borderColor: 'gray',
      borderWidth: 2,
      borderRadius: 10,
      marginBottom: 20,
    },
    highlight: {
      fontWeight: '700',
    },
  });

export default Matricula;