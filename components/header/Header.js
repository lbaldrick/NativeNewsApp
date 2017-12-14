import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                News
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: '#03A9F4',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        color: '#fff',
    },
});

export default Header;