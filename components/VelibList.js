import React, {Component, useState, useEffect} from 'react';
import {View, Text, Animated, TouchableOpacity, Button} from 'react-native';


const SlideInView = (props) => {


    const [slideAnim] = useState(new Animated.Value(0));  // Initial value for opacity: 0
    React.useEffect(() => {
        Animated.timing(
            slideAnim,
            {
                toValue: 5,
                duration: 10000,
            },
        ).start();
    }, []);


    return (
        <Animated.View                 // Special animatable View
            style={{
                ...props.style,
                flex: slideAnim,         // Bind opacity to animated value
            }}
        >
            {props.children}
        </Animated.View>
    );
};


export default class VelibList extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    onPress () {
        this.setState({
            count: this.state.count+1
        })
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <TouchableOpacity style={{flex: 1}} onPress={() => {this.onPress()}}>
                <View style={{flex: 1, backgroundColor: 'steelblue'}}>
                    <Button color="black" title="Go to List" onPress={() => {this.props.navigation.popToTop()}}/>
                </View>
                </TouchableOpacity>
                <SlideInView style={{backgroundColor: 'skyblue'}}>
                    <Text>
                        { this.state.count }
                    </Text>
                </SlideInView>
            </View>
        );
    }

}




