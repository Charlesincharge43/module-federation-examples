import React from 'react';

const style = {
  background: '#800',
  color: '#fff',
  padding: 12,
};

const app1Onclick = () => {
  console.log('clicked app 1 button')
}

const Button = () => <button onClick={app1Onclick} style={style}>App 1 Button</button>;

export default Button;
