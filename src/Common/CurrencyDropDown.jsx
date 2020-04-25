import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { country, countryCurrency } from '../config';
import Emoji from 'a11y-react-emoji';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    width: '8%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    height:20,
    marginTop:5,
    borderRadius:10,
    marginRight:15,
    
   // backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
}));

export default function CurrencyDropDown() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClickListItem = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="Device settings">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          onClick={handleClickListItem}
        >
          <ListItemText style={{marginTop:-15,color:'#fff'}}  secondary={countryCurrency[selectedIndex].symbol} />
          {/* <Emoji symbol={countryCurrency[selectedIndex].symbol}  /> */}
 
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {countryCurrency.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={event => handleMenuItemClick(event, index)}
          >
              <Emoji symbol={option.symbol} label="love" />
            
           {/* <span>{option.emoji}</span>  */}
           <Typography>{option.name+"("+option.symbol+")"}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
