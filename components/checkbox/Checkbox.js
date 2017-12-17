import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

const Checkbox = ({keyValue, labelText, isChecked, onToggle}) => {
    return(
        <TouchableHighlight onPress = { onToggle.bind(this, keyValue, !isChecked) }
                            underlayColor = "transparent"
                            style = { styles.checkBoxButton }>
            <View style = { styles.checkBoxHolder }>
                <View>
                    {
                        (isChecked)
                            ?
                            (<View style = { styles.checkedView }/>)
                            :
                            (<View style = { styles.uncheckedView }/>)
                    }
                </View>
                <Text style = { styles.checkBoxLabel }>{ labelText }</Text>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    checkBoxButton: {
        marginVertical: 10,
    },
    checkBoxHolder: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    uncheckedView: {
        flex: 1,
        width: 20,
        height: 10,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 2,
    },
    checkedView: {
        flex: 1,
        width: 20,
        height: 10,
        backgroundColor: 'red',
        borderColor: 'black',
        borderWidth: 2,
    },
    checkBoxLabel: {
        fontSize: 17,
        paddingLeft: 10,
    },
    checkedImage:
    {
        height: '80%',
        width: '80%',
        tintColor: 'white',
        resizeMode: 'contain'
    },
});

export default Checkbox;