import { React, useState, useCallback } from 'react';
import Login from './components/Login';
import Header from './components/Header';
import ConversionComp from './components/ConversionComp';

const App = () => {
  const [showConvert, setShowConvert] = useState(false);
  const [username, setUsername] = useState('');

  const onLogin = useCallback((newUser) => {
    setShowConvert(!showConvert);
    setUsername(newUser);
  }, []);

  return (
    <div className="App">
      {showConvert
        ? (
          <>
            <Header username={username}/>
            <ConversionComp />
          </>
        ) : <Login onLogin={onLogin} />
      }
    </div>
  );
}

export default App;
