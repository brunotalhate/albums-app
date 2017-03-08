import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, buttonText } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={buttonText}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#5856D6'
    },
    buttonText: {
        alignSelf: 'center',
        color: '#5856D6',
        fontSize: 14,
        fontWeight: '500',
        paddingTop: 8,
        paddingBottom: 8
    }
});

export default Button;
