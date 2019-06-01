import React, { useState, useEffect } from 'react';

const withAuthenticate = App => Login => () => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    setLoggedIn(localStorage.getItem('user') ? true : false);
  }, []);
  return loggedIn ? <App /> : <Login setLoggedIn={setLoggedIn} />;
};

export default withAuthenticate;
