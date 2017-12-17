import React from 'react';

import {
    FlatList,
    StyleSheet,
    View } from 'react-native';

import Checkbox from '../checkbox/Checkbox';

const CheckboxList = ({listData, onToggle}) => {
    return (
        <FlatList
            data={listData}
            renderItem={({item}) => <Checkbox onToggle={onToggle}{ ...item}/>}
        />
    );
};


export default CheckboxList;