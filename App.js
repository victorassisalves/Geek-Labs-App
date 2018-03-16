import React, { Component } from 'react';
import {
     AppRegistry,
     StyleSheet,
     View
} from 'react-native';
import BarraNavegacao from './src/components/BarraNavegacao';

export default class app5 extends React.Component {
  render() {
    return (
        <BarraNavegacao />
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);