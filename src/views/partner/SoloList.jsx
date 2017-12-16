import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SoloListComponent from './SoloListComponent';

class SoloList extends Component {
    render () {
        return (<SoloListComponent { ...this.props }/>);
    }
}

export default SoloList;