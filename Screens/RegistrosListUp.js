import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { db } from '../components/config';
import { ref, onValue } from 'firebase/database';

function RegistrosList() {
  const [veiculos, setVeiculos] = useState([]);
  const [filteredVeiculos, setFilteredVeiculos] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  useEffect(() => {
    const dbRef = ref(db, 'registro_veiculos');

    onValue(dbRef, (snapshot) => {
      const data = [];
      snapshot.forEach((childSnapshot) => {
        data.push(childSnapshot.val());
      });
      setVeiculos(data);
      setFilteredVeiculos(data); // Inicialmente, mostrar todos os registros
    });
  }, []);

  // Função para aplicar o filtro de data
  const filterByDate = () => {
    const filteredData = veiculos.filter((item) => {
      const itemDate = new Date(item.data_horaIni);
      return itemDate >= startDate && itemDate <= endDate;
    });
    setFilteredVeiculos(filteredData);
  };

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
      <View style={styles.filterContainer}>
        {/* Botão para abrir o seletor de data de início */}
        <TouchableOpacity onPress={() => setShowStartPicker(true)} style={styles.button}>
          <Text style={styles.buttonText}>Selecionar Data Início</Text>
        </TouchableOpacity>
        <Text style={styles.dateText}>Data Início: {startDate.toLocaleString('pt-BR')}</Text>

        {/* Botão para abrir o seletor de data de fim */}
        <TouchableOpacity onPress={() => setShowEndPicker(true)} style={styles.button}>
          <Text style={styles.buttonText}>Selecionar Data Fim</Text>
        </TouchableOpacity>
        <Text style={styles.dateText}>Data Fim: {endDate.toLocaleString('pt-BR')}</Text>

        <Button title="Filtrar" onPress={filterByDate} />

        {/* DateTimePicker para data de início */}
        {showStartPicker && (
          <DateTimePicker
            value={startDate}
            mode="datetime"
            display="default"
            onChange={(event, selectedDate) => {
              setShowStartPicker(false);
              if (selectedDate) {
                setStartDate(selectedDate);
              }
            }}
          />
        )}

        {/* DateTimePicker para data de fim */}
        {showEndPicker && (
          <DateTimePicker
            value={endDate}
            mode="datetime"
            display="default"
            onChange={(event, selectedDate) => {
              setShowEndPicker(false);
              if (selectedDate) {
                setEndDate(selectedDate);
              }
            }}
          />
        )}
      </View>

      <FlatList
        data={filteredVeiculos}
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
  filterContainer: {
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  dateText: {
    marginBottom: 10,
    fontSize: 16,
    color: 'black',
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
    color: 'black',
  },
});

export default RegistrosList;