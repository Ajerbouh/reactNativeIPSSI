import React, {Component, useContext} from 'react';
import {
    AsyncStorage,
    Text,
    SafeAreaView,
    View,
    FlatList,
    Button,
    Alert,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {VelibsContext} from '../containers/VelibProvider';

export const GlobalStationMap = props => {
    let map = [];
    const {data, myPosition} = useContext(VelibsContext);
    if (data !== null && myPosition !== null) {
       map = (
           <MapView
               style={{
                   width: Dimensions.get('window').width,
                   height: Dimensions.get('window').height * 0.4,
               }}
               provider={'google'}
               showsUserLocation={true}
               initialRegion={{
                   latitude: myPosition.latitude,
                   longitude: myPosition.longitude,
                   latitudeDelta: 0.04,
                   longitudeDelta: 0.01,
               }}
           >
               {data.map((data, key) => (
                   <Marker coordinate={{
                       latitude: data.fields.geo[0],
                       longitude: data.fields.geo[1],
                   }}
                           title={data.fields.station_name}
                           key={key}/>

               ))
               }
           </MapView>
       )
    }

    return map;
};
