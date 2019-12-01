import React, {Component} from 'react';
import {Text, View, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';


export default class VelibInfo extends Component{
    render() {

    const station = this.props.navigation.getParam('list');

        return (
            <View>

                <MapView
                    style={{
                        width: Dimensions.get('window').width,
                        height: Dimensions.get('window').height * 0.4,
                    }}
                    provider={"google"}
                    showsUserLocation={true}
                    initialRegion={{
                        latitude: station.geo[0],
                        longitude: station.geo[1],
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker coordinate={{latitude: station.geo[0], longitude: station.geo[1]}} title={station.station_name} key={station.recordid}/>
                </MapView>
                <Text>
                    {station.station_name}
                </Text>
            </View>
        )
    }
}
