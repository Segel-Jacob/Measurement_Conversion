import { React, useState } from 'react';
import PropTypes from 'prop-types'
import { Button, OutlinedInput, Box } from '@material-ui/core';
import './Login.css';

const Login = ({
  onLogin,
}) => {
  const [username, setUsername] = useState('');

  const getUsername = () => {
    if(!username){
      alert('Please enter a user name!')
    }
    else {
      onLogin(username);
    }
  } 

  const onChange = (e) => {
    setUsername(e.target.value);
  }
     
  return (
    <div >
      <Button
        className="login-button"
        variant="contained" 
        onClick={getUsername}
      >
        Login
      </Button>
      <Box m={2} pb={7}>
        <p>Username</p>
        <OutlinedInput  
          className="inputBox"
          value={username}
          onChange={onChange}
        />
        <p>Password</p>
        <OutlinedInput 
          className="inputBox"
          type="password"
        />
      </Box>
    </div>
  );
}

Login.propTypes = {
  onLogin: PropTypes.func,
}

Login.defaultProps = {
  onLogin: () => {},
}

export default Login;


