import React from 'react';
import {
    Text, 
    View,
    StyleSheet
} from 'react-native';

export default class Hello extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.hello}>Hello from Hello.js ! </Text>
                <Text>Hello World ! CSS </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    hello: {
        color: 'red',
        backgroundColor: 'yellow',
        fontSize: 24
    }
})