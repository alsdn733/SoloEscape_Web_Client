import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from 'material-ui/List';

class SoloListComponent extends Component {
    render() {
        
        let { children, ...otherProps } = this.props;
        return (
            <List {...otherProps}>
                { children }
            </List>
        );
    }
}

export default SoloListComponent;