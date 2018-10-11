import React from 'react';
import {
    TouchableHighlight,
    StyleSheet,
    Text
} from 'react-native';

const Clear = ({ onPress, value }) => {
        return (
            <TouchableHighlight 
                style={styles.inputButton}
                underlayColor="#193441"
                onPress={onPress}
            >
                <Text style={styles.inputText}>{ value }</Text>
            </TouchableHighlight>
        )
}

export default Clear;

const styles = StyleSheet.create({
    inputButton: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#91AA9D',
        height: 50,
    },
    inputText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
    },
  });