import React from 'react';
import {
    FlatList,
    StyleSheet,
    View } from 'react-native';
import NewsItem from '../news-item/NewsItem';

const NewsItemList = ({listData}) => {
        return(
            <View style={styles.container}>
                <FlatList
                    data={listData}
                    renderItem={({item}) => <NewsItem { ...item}/>}
                    />
            </View>
        );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});

export default NewsItemList;