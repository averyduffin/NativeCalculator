import React, { Component } from 'react';
import {
    TouchableHighlight,
    StyleSheet,
    Text
} from 'react-native';

export default class InputButton extends Component {
    
    render() {
        const { onPress, value } = this.props;
        return (
            <TouchableHighlight 
                style={[styles.inputButton, this.props.highlight ? styles.inputButtonHighlighted : null]}
                underlayColor="#193441"
                onPress={onPress}
            >
                <Text style={styles.inputButtonText}>{value}</Text>
            </TouchableHighlight>
        )
    }
}


const styles = StyleSheet.create({
    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#91AA9D'
    },
    inputButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },
    inputButtonHighlighted: {
        backgroundColor: '#193441'
    },
  });