import React, {Component} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {Alert} from 'react-native';
import { GeolocationContext } from './Contexts'


 export default class GeolocationProvider extends Component {
     constructor(props) {
         super(props);
         this.state = {
             location: [],
         }
     }

     componentDidMount() {
         Geolocation.getCurrentPosition(
             position => {

                 this.setState({location: position.coords});
             },
             error => Alert.alert(error.message),
             {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
         );
     }

     render() {
         return (
             <GeolocationContext.Provider value={{location: this.state.location}}>
                 {this.props.children}
             </GeolocationContext.Provider>
         )
     }
 }
