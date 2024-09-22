import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import BtnProximo from '../components/BtnProximo';
import Topo from '../components/Topo';
import { useData } from '../components/DataContext';
import { showAlert } from '../components/Util';
import { getCurrentDateTimeBrazil } from '../components/Util';

function ScreenMatricula({ navigation }) {

  const [matricula, setMatricula] = useState(''); //State para armazenar a matricula de cada colaborador
  const { updateData } = useData(); //Funcao para armazenar os dados no Contexto do App

  //funcao para quando o usuario tocar para ir para proxima tela
  //verifica se o campo matricula esta em branco, caso contrario armazena o valor da matricula no Context e vai para proxima tela
  const handlePress = () => {
    if (matricula.trim() === '') {
      showAlert('Preencha o campo Matricula');
    } else {
      updateData({ cod_matricula: matricula, dataHoraIni: getCurrentDateTimeBrazil() });
      navigation.navigate('ScreenVeiculo');
    }
  };

  const verRegistros = () => {
    navigation.navigate('RegistrosList');
  }


  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      <Topo />

      <View style={styles.container2}>
        <View style={styles.card}>
          <Text style={styles.title}>Insira sua Matrícula</Text>
          <Text style={styles.content}>Qual o número da sua Matrícula?</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={matricula} onChangeText={setMatricula}></TextInput>
          <View>
            <BtnProximo text={'Continuar'} onPress={handlePress} />
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Historico</Text>
          <BtnProximo text={'Ver Historico'} onPress={verRegistros} />
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
    marginBottom: 10,
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
    marginTop: 5
  }
});

export default ScreenMatricula;