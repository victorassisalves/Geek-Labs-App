import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    Image,
    Button,
    Platform,
    TouchableOpacity
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const Logo = require('../imgs/logo.png');
const MenuCliente = require('../imgs/menu_cliente.png');
const MenuContato = require('../imgs/menu_contato.png');
const MenuEmpresa = require('../imgs/menu_empresa.png');
const MenuServico = require('../imgs/menu_servico.png');


export default class CenaPrincipal extends Component{
    
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

            <View style={CenaPrincipalStyle.page}>
                <StatusBar
                    backgroundColor='#20232c'
                />
                <View style={CenaPrincipalStyle.logo}>
                    <Image style={CenaPrincipalStyle.logoImg} source={Logo}/>
                </View>
                
                { /*Tela principal com rotas de navegação usando o TouchableOpacity */}
                <View style={CenaPrincipalStyle.menu}>
                    <View style={CenaPrincipalStyle.menuGrupo}>
                        <TouchableOpacity  onPress={() => this.props.navigation.navigate('Clientes')}>
                            <Image style={CenaPrincipalStyle.imgStyle} source={MenuCliente}/>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={() => this.props.navigation.navigate('Contato')}>
                        <Image style={CenaPrincipalStyle.imgStyle} source={MenuContato}/>
                        </TouchableOpacity>
                    </View>

                    <View style={CenaPrincipalStyle.menuGrupo}>
                        <TouchableOpacity  onPress={() => this.props.navigation.navigate('Empresa')}>
                            <Image style={CenaPrincipalStyle.imgStyle} source={MenuEmpresa}/>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={() => this.props.navigation.navigate('Servicos')}>
                            <Image style={CenaPrincipalStyle.imgStyle} source={MenuServico}/>
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </View>
        );
    }
}


const CenaPrincipalStyle =  StyleSheet.create({
    page:{
        backgroundColor: '#fff',
        flex: 1
    },
    logo: {
        margin: 20,
        alignItems: 'center',
    },
    logoImg: {
        width: 200,
        height: 120,
    },
    menu: {
        alignItems: 'center'
    },
    menuGrupo: {
        flexDirection: 'row',
    },
    imgStyle: {
        margin: 15,
        borderRadius: 20
    }
});
