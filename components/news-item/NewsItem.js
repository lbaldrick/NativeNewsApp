import React from 'react';

import {
    Linking,
    StyleSheet,
    Text,
    View } from 'react-native';

const NewsItem = ({title, source, description, author, url}) => {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.subContainer}>
                <Text style={styles.description}>{description}</Text>
            </View>
            <View style={styles.subContainer}>
                <Text style={styles.author}>{author}</Text>
                <Text style={{
                        color: 'blue',
                        fontSize: 10,
                        textAlign: 'left',
                    }}
                      onPress={() => Linking.openURL(url)}>
                    {url}
                </Text>
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    subContainer: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        marginLeft: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 10,
        textAlign: 'left',
        marginBottom: 4,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 10,
        textAlign: 'left',
    },
    author: {
        fontSize: 10,
        textAlign: 'left',
    },
});

export default NewsItem;