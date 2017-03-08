import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        borderRadius: 2,
        borderColor: '#ddd',
        elevation: 2,
        marginLeft: 8,
        marginRight: 8,
        marginTop: 16
    }
});

export default Card;
