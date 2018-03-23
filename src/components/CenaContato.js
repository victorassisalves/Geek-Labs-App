import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    StatusBar,
    Image,
    Platform,
    TouchableOpacity,
    Linking,
    ScrollView
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import BarraNavegacao from './BarraNavegacao';
import CenaPrincipal from './CenaPrincipal';
import { Grid, Row } from 'react-native-easy-grid';

const Phone = require('../imgs/phone.png');
const Mail = require('../imgs/mail.png');
const Internet = require('../imgs/internet.png');

export default class CenaContato extends Component{
    static navigationOptions = {
        title: 'Contato',
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
            <View style={CenaContatoStyle.page}>
                <StatusBar
                    backgroundColor='#20232c'
                />

                <View style={CenaContatoStyle.viewCabecalho}>
                    <Text style={CenaContatoStyle.txtTitulo}>Entre Em Contato</Text>
                </View>

                
                    <Container >
                   
                        <Content > 
                        {/* Card der telefone */}
                        <ScrollView>
                            <TouchableOpacity onPress={() => Linking.openURL('tel:+5561983783465')} >
                                <Card >
                                    <CardItem>
                                        <Body style={CenaContatoStyle.viewContato}>
                                        
                                                <Image source={Phone}/>
                                                <Text style={CenaContatoStyle.txtContato}>(61) 983-783-465</Text>
                                            
                                        </Body>
                                    </CardItem>
                                </Card>
                            </TouchableOpacity>

                            {/* Card de Email */}
                            <TouchableOpacity onPress={() => Linking.openURL('mailto:victor.assis.alves@gmail.com?subject=Geek Labs App - ')}>
                                <Card>
                                    <CardItem>
                                    <Body style={CenaContatoStyle.viewContato}>
                                    
                                            <Image source={Mail}/>
                                            <Text style={CenaContatoStyle.txtContato}>victor.assis.alves@gmail.com</Text>
                                        
                                    </Body>
                                    </CardItem>
                                </Card>
                            </TouchableOpacity>

                            {/* card de site */}
                            <TouchableOpacity onPress={() => Linking.openURL('http://geeklabs.pro')} >
                                <Card>
                                    <CardItem>
                                        <Body style={CenaContatoStyle.viewContato}>
                                            
                                                <Image source={Internet}/>
                                                <Text style={CenaContatoStyle.txtContato}>www.geeklabs.pro</Text>
                                            
                                        </Body>
                                    </CardItem>
                                </Card>
                            </TouchableOpacity>
                            </ScrollView>
                        </Content>
                    </Container>
                


                           
            </View>
        );
    }
}

const CenaContatoStyle = StyleSheet.create({
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
        alignSelf: 'center',
    },
    viewContato:{
        padding: 20,
        flexDirection: 'row',
        
    },
    txtContato:{
        marginLeft: 25,
        fontSize: 18,
        alignSelf: 'center',
        color: '#2A5DB0',
        fontWeight: 'bold'

    }

});
