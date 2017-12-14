/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import NewsItemListContainer from './components/news-item-list-container/NewsItemListContainer';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from './components/header/Header';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.header}/>
          <NewsItemListContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
      height: 40,
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      zIndex: 10
  },
});
