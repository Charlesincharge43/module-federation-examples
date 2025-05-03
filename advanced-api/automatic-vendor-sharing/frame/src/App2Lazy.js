import React from 'react';

export const App2 = React.lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, 2000)
    })
      .then(() => import('app2/App'))
  });