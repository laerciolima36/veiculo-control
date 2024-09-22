import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import BtnProximo from '../components/BtnProximo';
import Topo from '../components/Topo';
import { useData } from '../components/DataContext';

function ScreenAbastecimento({ navigation }) {

  const { updateData } = useData();
  const [KmAbastecimento, setKmAbastecimento] = useState('');
  const [Litros, setLitros] = useState('');
  const [Valor, setValor] = useState('');

  const handlePress = () => {
    updateData({ km_abastecimento: KmAbastecimento, litros: Litros, valor_abastecimento: Valor })
    navigation.navigate('ScreenFinal');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      <Topo />
      <View style={styles.container2}>
        <View style={styles.card}>
          <Text style={styles.title}>KM Abastecimento</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={KmAbastecimento} onChangeText={setKmAbastecimento}></TextInput>
          <Text style={styles.title}>Litros</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={Litros} onChangeText={setLitros}></TextInput>
          <Text style={styles.title}>Valor</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={Valor} onChangeText={setValor}></TextInput>
          <BtnProximo text={'Salvar'} onPress={handlePress} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20
  },
  card: {
    width: 350,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 30

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#212121',
  },
  content: {
    fontSize: 16,
    color: '#757575',
  },
  form: {
    padding: 10
  },
  radio: {
    color: 'black',

  },
  pickerItem: {
    height: 65,
    width: 200,
    color: 'black',
    textAlign: 'center'
  },
  destino: {
    fontSize: 20,
    color: 'black',
    marginTop: 20,
    marginBottom: 0
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 4, // sombra para Android
    color: '#333', // cor do texto
    marginBottom: 25
  },
  highlight: {
    fontWeight: '700'
  }
});

export default ScreenAbastecimento;