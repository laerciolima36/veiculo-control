import { Alert } from 'react-native';

export const showAlert = (mensagem) => {
  Alert.alert(
    'Controle de Veiculos - Info',
    mensagem,
    [
      // {
      //   text: 'Cancelar',
      //   onPress: () => console.log('Cancelar Pressionado'),
      //   style: 'cancel',
      // },
      { text: 'OK', onPress: () => console.log('OK Pressionado') },
    ],
    { cancelable: false } // Define se o alerta pode ser fechado clicando fora dele
  );
};

export function getCurrentDateTimeBrazil() {
  const now = new Date();

  // Obtém a data e hora no formato brasileiro
  return now.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}