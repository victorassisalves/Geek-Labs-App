import React, { React } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import App from './App';

// importar o componente barra de navegação

import BarraNavegacao from './src/components/BarraNavegacao';

export default class app5 extends Component{
    render(){
        return (
            <BarraNavegacao/>
        );
    }
}

AppRegistry.registerComponent('app5', () => app5);