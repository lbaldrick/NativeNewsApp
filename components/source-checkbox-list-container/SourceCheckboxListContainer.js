import React, {Component} from 'react';
import { get } from '../clients/Rest';
import CheckboxList from '../checkbox-list/CheckboxList';

const URL = 'http://192.168.0.37:3003/news/sources';

import {
    StyleSheet,
} from 'react-native';

const onToggle = () => console.log("Checkbox pressed");

class SourceCheckboxListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [],
        };
    }

    componentDidMount() {
        get(URL)
            .then((response) => response.json())
            .then(({ sources }) => {
            const listData = sources.map(({id, name, isSelected}) => {
                return {
                    keyValue: id,
                    labelText: name,
                    isChecked: isSelected,
                    onToggle,
                };
            });
            this.setState({
                    listData,
                })
            });
    }

    render() {
        return <CheckboxList style={styles.container} listData={this.state.listData}/>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});


export default SourceCheckboxListContainer;