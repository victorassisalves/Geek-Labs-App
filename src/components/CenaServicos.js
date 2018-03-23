import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    Image,
    Platform,
    ScrollView
} from 'react-native';
import {Card, CardItem, Body, Container, Content} from 'native-base';

import BarraNavegacao from './BarraNavegacao';
import CenaPrincipal from './CenaPrincipal';

const Mobile = require('../imgs/mobile.png');
const Web = require('../imgs/responsive.png');

export default class CenaServicos extends Component{
    static navigationOptions = {
        title: 'Serviços',
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
          },
          headerBackTitleStyle: {
            color: '#2A5DB0',
        },
        headerTintColor: '#fff',
        
        /* No more header config here! */
    };
    
    render(){
        return (
            <View style={CenaServicosStyle.page}>
                <StatusBar
                    backgroundColor='#20232c'
                />
                <View style={CenaServicosStyle.viewCabecalho}>
                    <Text style={CenaServicosStyle.txtTitulo}>Produtos & Serviços</Text>
                </View>

               








            <Container>
                <Content>
                <ScrollView>
                {/* Servicos de App */}
                    <Card>
                        <CardItem>

                            <Body>
                                <View style={CenaServicosStyle.viewServicos}>
                                    <Image source={Mobile} style={CenaServicosStyle.imgStyle}/>
                                    <Text style={CenaServicosStyle.title}>Criação de Aplicativos</Text>
                                </View>
                                    
                                <Text style={CenaServicosStyle.txtServicos}>Desenvolvemos aplicativos para as plataformas Android e Iphone, gerando para nossos clientes a praticidade de ter seu negócio funcionando na palma de suas mãos.</Text>
                            </Body>

                        </CardItem>
                    </Card>


                {/* Servicos de Sites */}
                    <Card>
                        <CardItem>
                            
                            <Body>
                                <View style={CenaServicosStyle.viewServicos}>
                                    <Image source={Web} style={CenaServicosStyle.imgStyle}/>
                                    <Text style={CenaServicosStyle.title}>Criação de Sites</Text>
                                </View>
                            
                                <Text style={CenaServicosStyle.txtServicos}> Todos os sites são responsivos (cabem perfeitamente na tela de qualquer aparelho), tem a estratégia de SEO (otimização dos mecanismos de busca) pronta e está preparado para a implementação de estratégias de Inbound Marketing.</Text>
                            </Body>

                        </CardItem>
                    </Card>

                    </ScrollView>
                </Content>
            </Container>

                
            </View>
        );
    }
}

const CenaServicosStyle = StyleSheet.create({
    page:{
        backgroundColor: '#fff',
        flex: 1
    },
    viewCabecalho:{
        marginTop: 20,
        flexDirection: 'row',
        marginBottom: 20,
        alignSelf: 'center'

    },
    txtTitulo:{
        fontSize: 30,
        color: '#e4020b',
        fontWeight: 'bold',
        marginLeft: 10,
        alignSelf: 'center'
    },
    viewServicos:{
        padding: 20,
        flexDirection: 'row',
    },
    txtServicos:{
        marginLeft: 25,
        fontSize: 16,
    },
    title:{
        fontSize: 22,
        color: '#733',
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    imgStyle:{
        marginRight: 15
    }

});
