// import library for making components
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// create a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#5856D6',
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        //shadowColor: '',
        //shadowOffset: { witdh: 0, height: 2 },
        //shadowOpacity: 0.2,
        elevation: 4,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        fontWeight: '500',
        color: 'white'
    }
});

// make the component avaliable to other parts of the device
export default Header;
