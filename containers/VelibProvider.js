import VelibContext from './Contexts';
import React, {Component, createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Geolocation from '@react-native-community/geolocation';


export const VelibsContext = createContext();
/*export default class VelibProvider extends Component{
    constructor(props) {
        super(props);
        this.state = {
            stationList: [],
            connection: false,
            location: 'empty',
        };
    }
    apiUrl = `/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&geofilter.distance=${this.props.location.longitude}%2C${this.props.location.latitude}%2C${DISTANCE}`;

    componentDidMount() {
        this.setState({location: this.props.location});
        NetInfo.addEventListener(state => {
            this.setState({connection: state.isConnected});
        });

        return (
            fetch(this.apiUrl)
                .then(response => response.json())
                .then((responseJson) => {
                    this.setState({
                        stationList: responseJson.records,
                    });
                    AsyncStorage.setItem('list', JSON.stringify(responseJson.records));
                })
                .catch(
                    async () => {
                        value = await AsyncStorage.getItem('list');
                        if (value !== null) {
                            this.setState({stationList: JSON.parse(value)});
                        }
                    },
                )
        );
    }

    render() {
        return(
            <VelibContext.Provider
                value={{stationList: this.state.stationList, connection: this.state.connection, location: this.state.location}}>
                {this.props.children}
            </VelibContext.Provider>
        );
    }*/


export const VelibProvider = props => {
    const [data, setData] = useState(null);
    const [myPosition, setMyPosition] = useState(null);
    const DISTANCE = 10000;


    _storeData = async () => {
        await fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&geofilter.distance=' + myPosition.latitude + '%2C' + myPosition.longitude + '%2C' + 1000)
            .then((response) => response.json())
            .then((responseJson) => {
                AsyncStorage.setItem('VelibData', JSON.stringify(responseJson.records));
                setData(responseJson.records);
            }).catch(
                AsyncStorage.getItem('VelibData').then((value) => {
                    setData(JSON.parse(value));
                }),
            );
    };

    _getPosition = async () => {
        await Geolocation.getCurrentPosition(info => {
                setMyPosition(info.coords);
            this._storeData()
            }
        );

    };

    useEffect(() => {
        this._getPosition()
    }, []);

    return (
        <VelibsContext.Provider
            value={{
                data, setData, myPosition, setMyPosition
            }}
        >
            {props.children}
        </VelibsContext.Provider>
    );

};
