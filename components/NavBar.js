import React, {Component} from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { HomeScreen } from './HomeScreen';
import {createAppContainer} from 'react-navigation';
import {SafeAreaView, Text, View} from 'react-native';
import Navigation from './Navigation';
import {VelibsContext} from '../containers/Contexts';
import VelibList from './VelibList';
import Icon from 'react-native-ionicons'

export default class NavBar extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <BarContent/>
            </SafeAreaView>
        );
    }
}

const RootBar = createBottomTabNavigator({
    HomeScreen: {screen: HomeScreen},
    List: {screen: Navigation},
    Animation: {screen: VelibList},
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Icon;
                let iconName;
                if (routeName === 'List') {
                    iconName = `list-box`;
                    // Sometimes we want to add badges to some icons.
                    // You can check the implementation below.
                } else if (routeName === 'HomeScreen') {
                    iconName = `home`;
                } else if (routeName === 'Animation') {
                    iconName = `play`;
                }

                // You can return any component that you like here!
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'steelblue',
            inactiveTintColor: 'gray',
        },
    }
);
export const BarContent = createAppContainer(RootBar);
