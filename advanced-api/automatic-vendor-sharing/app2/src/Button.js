import React from 'react';

const style = {
  background: '#00c',
  color: '#fff',
  padding: 12,
};

const app2Onclick = () => {
  console.log('clicked app 2 button')
}

const Button = () => <button onClick={app2Onclick} style={style}>App 2 Button</button>;

export default Button;
