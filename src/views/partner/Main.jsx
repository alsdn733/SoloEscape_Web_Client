import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SoloList from './SoloList';
import SoloItem from './SoloItem';
import * as SoloAPI from '../../apis/SoloEscape.js'

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            partners: {},
            profiles: {},
        }
    }

    async componentDidMount() {
        var res = await SoloAPI.getGoogleUser();
        
        var ids = await Promise.all(res.data.map( async user => {
           var profiles = await SoloAPI.getProfileById({
               id: user.id,
           }) 
           console.log(1111, profiles);
           return profiles;
        }));

        console.log(222, ids)

        this.setState(() => {
            return {
                partners: res.data,
                profiles: ids,
            };
          });
    }

    render() {
        return ( 
            <div>
                <SoloList>
                    <SoloItem {...this.state}/>
                </SoloList>
            </div>
        );
    }
}

export default Main;