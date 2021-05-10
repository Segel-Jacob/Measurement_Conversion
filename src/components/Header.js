import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { AppBar, Typography, Avatar } from '@material-ui/core';

export const Header = ({username}) => {
  return (
    <div>
      <AppBar
        aria-label={username}
        className="header"
      >
        <Avatar className="avatar">
          {username.charAt(0)}
        </Avatar>
        <Typography variant="h6" style={{color: 'black', marginRight: '30px'}}>
          Welcome {username}
        </Typography>             
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  username: PropTypes.string.isRequired, 
}

export default Header;

    

