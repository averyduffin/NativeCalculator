import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import InputButton from './InputButton';
import Clear from './Clear'

const inputButtons = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+']
];


class ReactCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previousInputValue: 0,
            inputValue: 0,
            selectedSymbol: null
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.displaySection}>
                    <Text style={styles.displayText}>{this.state.inputValue}</Text>
                </View>
                <View style={styles.inputSection}>
                    <Clear onPress={() => this.onInputButtonPressed('CE')} value='CE'/>
                    {this.renderInputButtons()}
                </View>
            </View>
        )
    }
    renderInputButtons() {
        let views = [];
        for (var r = 0; r < inputButtons.length; r ++) {
            let row = inputButtons[r];
            let inputRow = [];
            for (var i = 0; i < row.length; i ++) {
                let input = row[i];
                inputRow.push(
                    <InputButton 
                        value={input}
                        highlight={this.state.selectedSymbol === input}
                        key={r + "-" + i} 
                        onPress={() => this.onInputButtonPressed(input)}
                    />
                );
            }
            views.push(<View style={styles.inputRow} key={"row-" + r}>{inputRow}</View>)
        }
        return views;
    }
    onInputButtonPressed(input) {
        switch (typeof input) {
            case 'number':
                return this.handleNumber(input)
            case 'string':
                return this.handleString(input)
        }
    }
    handleNumber(num) {
        let inputValue = (this.state.inputValue * 10) + num;
        this.setState({
            inputValue: inputValue
        })
    }
    handleString(str) {
        switch (str) {
            case '/':
            case '*':
            case '+':
            case '-':
                this.setState({
                    selectedSymbol: str,
                    previousInputValue: this.state.inputValue,
                    inputValue: 0
                });
                break;
            case '=':
                let symbol = this.state.selectedSymbol,
                    inputValue = this.state.inputValue,
                    previousInputValue = this.state.previousInputValue;
                if (!symbol) {
                    return;
                }
                this.setState({
                    previousInputValue: 0,
                    inputValue: eval(previousInputValue + symbol + inputValue),
                    selectedSymbol: null
                });
                break;
            case 'CE':
                this.setState({
                    previousInputValue: 0,
                    inputValue: 0,
                    selectedSymbol: null
                });
        }
    }
}

export default ReactCalculator;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    displaySection: {
        flex: 2,
        backgroundColor: '#193441',
        justifyContent: 'center'
    },
    inputSection: {
        flex: 8, 
        backgroundColor: '#3E606F'
    },
    inputRow: {
        flex: 1,
        flexDirection: 'row'
    },
    displayText: {
        color: 'white',
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    },
  });