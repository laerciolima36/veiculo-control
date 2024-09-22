# Vehicle Usage Management App

Este é um aplicativo de controle de uso de veículos desenvolvido para uma empresa com o objetivo de **reduzir o consumo de papel** e otimizar o processo de registro de utilização de veículos. O aplicativo foi desenvolvido utilizando **React Native** e permite que os usuários registrem o uso dos veículos de forma digital, mesmo quando estão offline. Os dados são sincronizados com um banco de dados remoto (MySQL) assim que a conexão à internet é restabelecida.

## Funcionalidades

- Registro digital de uso de veículos.
- Armazenamento de dados offline com sincronização automática.
- Relatórios de utilização de veículos.
- Interface amigável e de fácil uso.
- Suporte multiplataforma (Android e iOS).

## Tecnologias Utilizadas

- **React Native**: Framework utilizado para o desenvolvimento multiplataforma.
- **MySQL**: Banco de dados remoto para armazenamento de informações dos veículos.
- **Expo**: Plataforma usada para facilitar o desenvolvimento e a execução do aplicativo.
- **React Navigation**: Utilizado para a navegação entre as telas do aplicativo.
- **Axios**: Biblioteca para fazer requisições HTTP ao servidor.
- **SQLite**: Para armazenamento local de dados no dispositivo.

## Instalação e Configuração

### Pré-requisitos

- Node.js instalado na máquina.
- Expo CLI globalmente instalada:
  ```bash
  npm install -g expo-cli


.
├── android/             # Código específico da plataforma Android
├── ios/                 # Código específico da plataforma iOS
├── src/
│   ├── components/      # Componentes reutilizáveis
│   ├── screens/         # Telas do aplicativo
│   ├── services/        # Serviços (ex. API, sincronização)
│   ├── storage/         # Armazenamento local (SQLite)
│   └── utils/           # Funções utilitárias
├── assets/              # Imagens e ícones
├── .env                 # Variáveis de ambiente (não comitar no Git)
├── App.js               # Ponto de entrada do aplicativo
└── README.md            # Documentação do projeto
