import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

import FavoriteIcon from 'material-ui-icons/Favorite';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        background: theme.palette.background.paper,
    },
});

const Partners = ({
    partners,
    profiles,
  }) => {
    console.log(5555, profiles)
    
    return (partners && partners.map && profiles && profiles.map) 
      ? partners.map((partner, idx) => {
          console.log(222 ,profiles[idx].data[0])
            var objurl = window.URL.createObjectURL(new Blob([new Uint8Array(profiles[idx].data[0].picture.data)], { type: "image/gif" }));
            const Img = new Image(200, 200);
            Img.src = objurl;
            console.log(444, objurl, Img, profiles[0].data)
        return (            
            <ListItem key={idx}>
                <Avatar alt={partner.name} src={objurl} />
                <ListItemText primary={partner.name} />
                <ListItemSecondaryAction>
                    <Button fab mini color="primary" aria-label="favorite">
                        <FavoriteIcon />
                    </Button>
                </ListItemSecondaryAction>
            </ListItem>    
        );
      })
      : null;
  }

class SoloItemComponent extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Partners partners={this.props.partners} profiles={this.props.profiles} />        
        );
    }
}

SoloItemComponent.propTypes = {

};

export default withStyles( styles )( SoloItemComponent );