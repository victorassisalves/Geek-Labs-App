import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    Image,
    Platform,
    TouchableOpacity,
    Icon
} from 'react-native';
import { Container, Header, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import BarraNavegacao from './BarraNavegacao';
import CenaPrincipal from './CenaPrincipal';


const Iesb = require('../imgs/iesb.png');
const IesbLab = require('../imgs/iesbLab.png');
const Time2Goal = require('../imgs/time2goal.png');

export default class CenaClientes extends Component{
    static navigationOptions = {
        title: 'Parceiros & Clientes',
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
          
        /* No more header config here! */
    };
    render(){
        return (

            <View style={CenaClienteStyle.page}>
                <StatusBar
                    backgroundColor='#20232c'
                />
                
                <Container >

                {/* Área de parceiros */}
                        <Header >
                            <Content>
                                <Grid>
                        
                                    <Row style={CenaClienteStyle.viewCabecalho}>
                                        <Text style={CenaClienteStyle.txtTitulo}>Parceiros</Text>
                                    </Row>
                        
                                </Grid>
                            </Content>
                        </Header>
                    
                        <Container style={CenaClienteStyle.menuGrupo}>
                                <View style={CenaClienteStyle.imgView}>
                                    <View >
                                        <Image source={Iesb} style={CenaClienteStyle.imgStyle}/>
                                    </View>
                                        
                                </View>
                                    
                                <View style={CenaClienteStyle.imgView}>
                                    <View >
                                        <Image source={IesbLab} style={CenaClienteStyle.imgStyle}/>
                                    </View>
                                        
                                </View>
                        </Container>


                        {/* Área de plientes */}
                        
                        <Header >
                            <Content>
                                <Grid>
                        
                                    <Row style={CenaClienteStyle.viewCabecalho}>
                                        <Text style={CenaClienteStyle.txtTitulo}>Clientes</Text>
                                    </Row>
                        
                                </Grid>
                            </Content>
                        </Header>
                            
                         {/* row 1    */}
                        <Container style={CenaClienteStyle.menuGrupo}>
                                <View style={CenaClienteStyle.imgView}>
                                    <View >
                                        <Image source={Time2Goal} style={CenaClienteStyle.imgStyle}/>
                                    </View>
                                        
                                </View>
                                    
                                <View style={CenaClienteStyle.imgView}>
                                    <View >
                                        <Image source={IesbLab} style={CenaClienteStyle.imgStyle}/>
                                    </View>
                                        
                                </View>
                        </Container>


                        {/* row 2 */}
                        <Container style={CenaClienteStyle.menuGrupo}>
                                <View style={CenaClienteStyle.imgView}>
                                    <View >
                                        <Image source={Iesb} style={CenaClienteStyle.imgStyle}/>
                                    </View>
                                        
                                </View>
                                    
                                <View style={CenaClienteStyle.imgView}>
                                    <View >
                                        <Image source={IesbLab} style={CenaClienteStyle.imgStyle}/>
                                    </View>
                                        
                                </View>
                        </Container>


                </Container>


                
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
        flexDirection: 'row',
        marginBottom: 20,
        alignSelf: 'center'
    },
    txtTitulo:{
        fontSize: 30,
        color: '#e4020b',
        fontWeight: 'bold',
        marginLeft: 10,
    },
    viewClientes:{
        padding: 20,
    },
    txtClientes:{
        marginLeft: 25,
        fontSize: 16
    },
    imgView:{
        alignItems: 'center',
        alignSelf: 'center',
        width: '50%'
    },
    menuGrupo:{
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 15,
        alignItems: 'center'
    }

});
