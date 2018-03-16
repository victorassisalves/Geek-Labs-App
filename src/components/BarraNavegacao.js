import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Platform
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import CenaPrincipal from './CenaPrincipal';
import CenaClientes from './CenaCliente';
import CenaEmpresa from './CenaEmpresa';
import CenaServicos from './CenaServicos';
import CenaContato from './CenaContato';

// componente de navegação
const Navegar =  StackNavigator({
    Home: {
      screen: CenaPrincipal,
    },
    Clientes: {
      screen: CenaClientes,
    },
    Empresa:{
      screen: CenaEmpresa,
    },
    Servicos:{
      screen: CenaServicos,
    },
    Contato:{
      screen: CenaContato,
    },
},
  {
    initialRouteName: 'Home',
  }

);

export default class BarraNavegacao extends Component{
    
  static navigationOptions = {
    title: 'Geek Labs',
    headerStyle: {
        backgroundColor: '#20232c',
        height: 60,
        padding: 10,
        padding: (Platform.OS === 'ios') ? 20 : 0,
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',
        color: '#fff',
      },
    
    /* No more header config here! */
};
  render(){
        return (
            <Navegar />            
        );
    }
}

