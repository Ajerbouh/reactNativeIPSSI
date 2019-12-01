import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {GlobalStationMap} from './GlobalStationMap';


export const HomeScreen = props =>  {
        return (
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <GlobalStationMap/>
                        <Button
                            title="Animation (pour navigation)"
                            onPress={() =>
                                props.navigation.navigate('VelibList')
                            }
                        />
                    </View>
        );
}
