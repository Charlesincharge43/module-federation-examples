import React from 'react';
import { Spinner } from '@salt-ds/core'

const style = {
  background: '#00c',
  color: '#fff',
  padding: 12,
};

const app2Onclick = () => {
  console.log('clicked app 2 button')
}

// const Button = () => <button onClick={app2Onclick} style={style}>App 2 Button</button>;
const Button = () => <Spinner/>;

export default Button;
