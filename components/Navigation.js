import * as React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import VelibList from './VelibList';
import HomeScreen from './HomeScreen';
import {List} from './List';
import VelibInfo from './VelibInfo';



const Navigation = createStackNavigator({
        VelibList: {screen: VelibList},
        List: {screen: List},
        VelibInfo: {screen: VelibInfo},
    },
    {
        initialRouteName: 'List',
    });

export default createAppContainer(Navigation);




