import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { db } from '../components/config';
import { ref, onValue, push, child } from 'firebase/database';

function RegistrosList() {
  const [veiculos, setVeiculos] = useState([]);

  // Simulando o carregamento de dados da collection
  useEffect(() => {
    const dbRef = ref(db, 'registro_veiculos');

    onValue(dbRef, (snapshot) => {
      console.log(snapshot.val());
      const data = [];
      snapshot.forEach((childSnapshot) => {
        data.push(childSnapshot.val());
      });
      setVeiculos(data);
    });
  }, []);

  // Função para renderizar cada item da lista
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>Veículo: {item.veiculo}</Text>
      <Text style={styles.title}>Código de matrícula: {item.cod_matricula}</Text>
      <Text style={styles.title}>Destino: {item.destino}</Text>
      <Text style={styles.title}>KM Inicial: {item.km_inicial}</Text>
      <Text style={styles.title}>Abastecimento: {item.abastecimento ? 'Sim' : 'Nao'}</Text>
      {item.abastecimento ? (
        <>
          <Text style={styles.title}>KM Abastecimento: {item.km_abastecimento}</Text>
          <Text style={styles.title}>Litros: {item.litros}</Text>
          <Text style={styles.title}>Valor Abastecimento: R$ {item.valor_abastecimento}</Text>
        </>
      ) : null}
      <Text style={styles.title}>KM Final: {item.km_final}</Text>
      <Text style={styles.title}>Data/Hora Início: {item.data_horaIni}</Text>
      <Text style={styles.title}>Data/Hora Fim: {item.data_horaFin}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={veiculos}
        keyExtractor={(item) => item.cod_matricula}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  itemContainer: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black'
  },
});

export default RegistrosList;