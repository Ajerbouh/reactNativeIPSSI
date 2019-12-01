import React, {Component, useContext} from 'react';
import {SafeAreaView, View, Text, FlatList, AsyncStorage, Button} from 'react-native';
import VelibContext from '../containers/Contexts'
import {VelibsContext} from '../containers/VelibProvider';


export const List = props => {

        const {data} = useContext(VelibsContext);
        return (
            <SafeAreaView style={{flex: 1}}>

                <View style={{flex: 1}}>
                        <FlatList data={data}
                                  renderItem={({item}) =>
                                      <Button
                                          title={item.fields.station_name}
                                          onPress={() => props.navigation.navigate('VelibInfo', {list: item.fields})}
                                          color="skyblue"
                                      />}
                                  keyExtractor={item => item.fields.recordid}
                        />
                </View>
            </SafeAreaView>
        )
}
