import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SoloList from './SoloList';
import SoloItem from './SoloItem';

class Main extends Component {
    render() {
        return ( 
            <div>
                <SoloList>
                    <SoloItem/>
                    <SoloItem/>
                    <SoloItem/>
                </SoloList>
            </div>
        );
    }
}

export default Main;