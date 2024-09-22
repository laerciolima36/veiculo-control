import React, { useMemo, useState } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import BtnProximo from '../components/BtnProximo';
import Topo from '../components/Topo';
import RadioGroup from 'react-native-radio-buttons-group';
import { useData } from '../components/DataContext';
import { ref, set, push, child } from 'firebase/database';
import { db } from '../components/config';
import { showAlert } from '../components/Util';

function ScreenDestino({ navigation }) {

  const { updateData } = useData();
  const { formData } = useData();
  const [destino, setDestino] = useState('');
  const [KmInicial, setKmInicial] = useState('');
  const [abastecimento, setabastecimento] = useState(false);
  const [saveResult, setsaveResult] = useState('');

  const newKey = push(child(ref(db), 'registro_veiculos')).key;


  const radioButtons = useMemo(() => ([
    {
      id: true,
      label: 'Sim',
      value: true
    },
    {
      id: false,
      label: 'Não',
      value: false
    }
  ]), []);


  const handlePress = () => {
    if (destino.trim() === '' || KmInicial.trim() === '') {
      showAlert('Preencha o campo Matricula');
    }else if (abastecimento) { //caso tenha abastecimento
      updateData({ destino: destino, km_inicial: KmInicial, abastecimento: abastecimento })
      navigation.navigate('ScreenAbastecimento');
    } else {
      updateData({ destino: destino, km_inicial: KmInicial, abastecimento: abastecimento })
      salvarParcial();
      navigation.navigate('ScreenFinal');
    }
  };


  const salvarParcial = () => {
    set(ref(db, 'registro_veiculos/' + newKey), {
      cod_matricula: formData.cod_matricula,
      veiculo: formData.veiculo,
      destino: destino,
      km_inicial: KmInicial,
      abastecimento: abastecimento,
      data_horaIni: formData.dataHoraIni
    }).then(() => {
      setsaveResult('Dados Inseridos com Sucesso!');
      updateData({ chave_primaria: newKey })
    }).catch((error) => {
      setsaveResult(error);
    })
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Topo />
      <View style={styles.container2}>
        <View style={styles.card}>
          <Text style={styles.title}>Destino</Text>
          <TextInput style={styles.input} value={destino} onChangeText={setDestino}></TextInput>
          <Text style={styles.title}>KM Inicial</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={KmInicial} onChangeText={setKmInicial}></TextInput>
          <Text style={styles.title}>Abastecimento</Text>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={setabastecimento}
            selectedId={abastecimento}
            labelStyle={styles.radio}
          />
          <BtnProximo text={abastecimento ? 'Proximo' : 'Salvar'} onPress={handlePress} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
  }
});

export default ScreenDestino;