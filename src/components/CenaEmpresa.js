import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    Image,
    Platform
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';
import CenaPrincipal from './CenaPrincipal';
import CenaClientes from './CenaCliente';

const Oculos = require('../imgs/oculos.png');
const Cliente2 = require('../imgs/cliente2.png');

export default class CenaEmpresa extends Component{
    static navigationOptions = {
        title: 'A Empresa',
        headerStyle: {
            backgroundColor: '#20232c',
            height: 60,
            padding: 10,
            padding: (Platform.OS === 'ios') ? 20 : 0,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
            textAlign: 'center',
            color: '#fff',
          },
          headerBackTitleStyle: {
            color: '#2A5DB0',
        },
        headerTintColor: '#fff',
        
        /* No more header config here! */
    };
    
    render(){
        return (
            <View style={CenaClienteStyle.page}>
                <StatusBar
                    backgroundColor='#20232c'
                />
                <View style={CenaClienteStyle.viewCabecalho}>
                    <Text style={CenaClienteStyle.txtTitulo}>Quem somos</Text>
                </View>

                <View style={CenaClienteStyle.viewClientes}>
                    <Text style={CenaClienteStyle.txtClientes}>A Geek Labs surgiu da paixão de dois rapazes pela tecnologia e com o sonho de fazer do mundo um lugar melhor. A empresa foi criada no começo de 2018 e tem como propósito ajudar enpresas a melhorarem seus negócios através da internet com sites e Aplicativos. Estamos sempre em busca do One Piece.</Text>
                </View>

                
            </View>
        );
    }
}

const CenaClienteStyle = StyleSheet.create({
    page:{
        backgroundColor: '#fff',
        flex: 1
    },
    viewCabecalho:{
        marginTop: 20,
        flexDirection: 'row',
        alignSelf: 'center'

    },
    txtTitulo:{
        fontSize: 30,
        color: '#e4020b',
        fontWeight: 'bold',
        marginLeft: 10,
        alignSelf: 'center'
    },
    viewClientes:{
        padding: 20,
    },
    txtClientes:{
        marginLeft: 25,
        fontSize: 20
    },
    imgResize:{
        width: 150,
        height: 100
    }

});
