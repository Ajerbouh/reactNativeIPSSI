/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import NavBar from './components/NavBar';
import {VelibProvider} from './containers/VelibProvider';
class App extends Component {


    render() {
        return (

            <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}}>
                <VelibProvider>
                    <NavBar/>
                </VelibProvider>
            </View>
            </SafeAreaView>
        );
    };
}


export default App;
