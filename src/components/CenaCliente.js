import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    Image,
    Platform,
    TouchableOpacity,
    Icon,
    ScrollView
} from 'react-native';
import { Container, Header, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import BarraNavegacao from './BarraNavegacao';
import CenaPrincipal from './CenaPrincipal';


const Iesb = require('../imgs/iesb.png');
const IesbLab = require('../imgs/iesbLab.png');
const Time2Goal = require('../imgs/time2goal.png');
const MuscleFormula = require('../imgs/muscleformula.png');
const NatureInvest = require('../imgs/natureinvest.png');
const AcquaFarm = require('../imgs/acquafarm.png');

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
            color: '#fff',
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

            <View style={CenaClienteStyle.page}>
                <StatusBar
                    backgroundColor='#20232c'
                />
                
                <Container >
                <ScrollView>
                {/* Área de parceiros */}
                        <Header style={CenaClienteStyle.headerStyle}>
                            <Content>
                                <Grid>
                        
                                    <Row style={CenaClienteStyle.viewCabecalho}>
                                        <Text style={CenaClienteStyle.txtTitulo}>Parceiros</Text>
                                    </Row>
                        
                                </Grid>
                            </Content>
                        </Header>
                    
                        <Grid style={CenaClienteStyle.menuGrupo}>
                            {/* Parceiros */}
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
                        </Grid>


                        {/* Área de clientes */}
                        <Header style={CenaClienteStyle.headerStyle} >
                            <Content>
                                <Grid>
                        
                                    <Row style={CenaClienteStyle.viewCabecalho}>
                                        <Text style={CenaClienteStyle.txtTitulo}>Clientes</Text>
                                    </Row>
                        
                                </Grid>
                            </Content>
                        </Header>
                        
                            
                         {/* row 1    */}
                        <Grid style={CenaClienteStyle.menuGrupo}>
                                <View style={CenaClienteStyle.imgView}>
                                    <View style={CenaClienteStyle.imgStyle}>
                                        <Image source={Time2Goal} />
                                    </View>
                                        
                                </View>
                                    
                                <View style={CenaClienteStyle.imgView}>
                                    <View style={CenaClienteStyle.imgStyle}>
                                        <Image source={MuscleFormula} />
                                    </View>
                                        
                                </View>
                        </Grid>


                        {/* row 2 */}
                        <Grid style={CenaClienteStyle.menuGrupo}>
                                <View style={CenaClienteStyle.imgView}>
                                    <View >
                                        <Image source={NatureInvest} />
                                    </View>
                                        
                                </View>
                                    
                                <View style={CenaClienteStyle.imgView}>
                                    <View style={CenaClienteStyle.imgStyle}>
                                        <Image source={AcquaFarm} />
                                    </View>
                                        
                                </View>
                        </Grid>
                        
                        </ScrollView>

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
    headerStyle: {
        backgroundColor: '#c1c1c1',
        overflow: 'hidden',
    },
    viewCabecalho:{
        flexDirection: 'row',
        marginBottom: 20,
        alignSelf: 'center',
        
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
        alignContent: 'center',
        width: '50%',
    },
    imgStyle:{
        padding: 10
    },
    rowParceiros:{
        height: 150,
    },
    rowClientes:{

    },
    menuGrupo:{
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 15,
        alignItems: 'center',
        alignContent: 'center',
    }

});
