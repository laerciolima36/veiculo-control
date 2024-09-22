import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import BtnProximo from '../components/BtnProximo';
import Topo from '../components/Topo';
import { useData } from '../components/DataContext';
import { ref, set, push, child } from 'firebase/database';
import { db } from '../components/config';
import { getCurrentDateTimeBrazil, showAlert } from '../components/Util';

function ScreenFinal({ navigation }) {

  const { updateData } = useData();
  const { formData } = useData();
  const [KmFinal, setKmFinal] = useState('');
  const [saveResult, setsaveResult] = useState('');

  let newKey;

  const handlePress = () => {
    console.log(formData.abastecimento);

    if (formData.abastecimento) {
      newKey == push(child(ref(db), 'registro_veiculos')).key;
      create();
      navigation.navigate('ScreenMatricula');
    } else {
      newKey = formData.chave_primaria;
      update();
      navigation.navigate('ScreenMatricula');
    }
  };



  const create = () => {
    set(ref(db, 'registro_veiculos/' + newKey), {
      cod_matricula: formData.cod_matricula,
      veiculo: formData.veiculo,
      destino: formData.destino,
      km_inicial: formData.km_inicial,
      abastecimento: formData.abastecimento,
      km_abastecimento: formData.km_abastecimento,
      litros: formData.litros,
      valor_abastecimento: formData.valor_abastecimento,
      km_final: KmFinal,
      data_horaIni: formData.dataHoraIni,
      data_horaFin: getCurrentDateTimeBrazil()
    }).then(() => {
      setsaveResult('Dados Inseridos com Sucesso!');
    }).catch((error) => {
      setsaveResult(error);
    })
  }

  const update = () => {
    set(ref(db, 'registro_veiculos/' + newKey), {
      cod_matricula: formData.cod_matricula,
      veiculo: formData.veiculo,
      destino: formData.destino,
      abastecimento: formData.abastecimento,
      km_inicial: formData.km_inicial,
      km_final: KmFinal,
      data_horaIni: formData.dataHoraIni,
      data_horaFin: getCurrentDateTimeBrazil()
    }).then(() => {
      setsaveResult('Dados Inseridos com Sucesso!');
    }).catch((error) => {
      setsaveResult(error);
    })
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Topo />
      <View style={styles.container2}>
        <View style={styles.card}>
          <Text style={styles.title}>Insira o KM Final</Text>
          <Text style={styles.content}>Ao final do seu trajeto insira o KM Final</Text>
          <Text style={styles.teste}>{saveResult}</Text>

          <TextInput style={styles.input} keyboardType="numeric" value={KmFinal} onChangeText={setKmFinal}></TextInput>
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
  input: {
    height: 65,
    width: '100%',
    fontSize: 40,
    color: 'black',
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

export default ScreenFinal;