import React, {Component} from 'react';
import { get } from '../clients/Rest';
import NewsItemList from '../news-item-list/NewsItemList';

const URL = 'http://192.168.0.37:3003/news/all';

import {
    FlatList,
    StyleSheet,
    View } from 'react-native';

class NewsItemListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [],
        };
    }

    componentDidMount() {
        get(URL)
            .then((response) => response.json())
            .then(({ articles }) => this.setState({
                listData: articles,
            }));
    }

    render() {
        return <NewsItemList style={styles.container} listData={ this.state.listData}/>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});


export default NewsItemListContainer;