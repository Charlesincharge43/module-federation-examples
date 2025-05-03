import LocalButton from './Button';
import React, { useEffect } from 'react';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    console.log('did axio s import properly?')
    console.log(axios)
    axios.get('testttt')
      .catch(console.error)
  }, [])
  return (
  <div>
    --------------
    <h2>App 1</h2>
    <LocalButton />
    --------------
  </div>
)};

export default App;
