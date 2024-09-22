import React, { useState, useContext, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import BtnProximo from '../components/BtnProximo';
import Topo from '../components/Topo';
import { Picker } from '@react-native-picker/picker';
import { useData } from '../components/DataContext';
import { get, ref } from 'firebase/database';
import { db } from '../components/config';
import Loading from '../components/Loading';

function ScreenVeiculo({ navigation }) {

  const { updateData } = useData();
  const [veiculos, setVeiculos] = useState();
  const [isVisible, setIsVisible] = useState(true);
  const [veiculoSelecionado, setVeiculoSelecionado] = useState();

  const inicio = ref(db, 'veiculos');


  const fetchData = async () => {
    try {
      const snapshot = await get(inicio);
      if (snapshot.exists()) {
        const data = snapshot.val();
        //console.log('Dados:', data);
        setVeiculos(data);
        setIsVisible(false);
        setVeiculoSelecionado(data[1].nome);
      } else {
        console.log('Nenhum dado disponível');
      }
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePress = () => {
    updateData({ veiculo: veiculoSelecionado })
    navigation.navigate('ScreenDestino');
  };

  return (
    <View style={styles.container}>
      {isVisible && (
        <Loading />
      )}
      <Topo />

      <View style={styles.container2}>
        <View style={styles.card}>
          <Text style={styles.title}>Selecione o Veiculo</Text>
          <Text style={styles.content}>Qual veículo você está dirigindo?</Text>

          <Picker
            selectedValue={veiculoSelecionado}
            style={styles.pickerItem}
            onValueChange={(itemValue) => setVeiculoSelecionado(itemValue)}
            mode='dropdown'
            dropdownIconColor='black'
            dropdownIconRippleColor='blue'>
              
            {veiculos ? veiculos.map((veiculo, index) => {
              return (<Picker.Item key={index} label={veiculo.nome} value={veiculo.nome} />);
            }) : <Picker.Item label='Carregando...' value='1' />
            }
          </Picker>

          <BtnProximo text={'Proximo'} onPress={handlePress} />
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20
  },
  pickerItem: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    color: '#333',
    backgroundColor: '#fff',
    paddingRight: 30, // para ícone de seta
    elevation: 5,
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
  }
});

export default ScreenVeiculo;