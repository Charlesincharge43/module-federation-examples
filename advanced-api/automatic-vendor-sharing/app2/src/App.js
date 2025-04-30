import LocalButton from './Button';
import React, { useEffect, useState } from 'react';

import { Spinner } from '@salt-ds/core';

const RemoteButton = React.lazy(() => import('app1/Button'));

const App = () => {
  const [loading, setloading] = useState(false)

  // const loadTheThing = () => new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve()
  //   }, 2000)
  // })
  const loadTheThing = () => import('@salt-ds/core')

  useEffect(() => {
    
    setloading(true)
    loadTheThing()
      .then(r => {
        console.log('wait did it load? ', r)
        setloading(false)
      })
    
    // const saltImport = await import('@salt-ds/core')
    // const { Spinner } = saltImport
    
  }, [])
  return (
  <div>
    {loading && <>ITS LOADING......</>}
    <h1>Bi-Directional</h1>
    <h2>App 2</h2>
    <Spinner />
    <LocalButton />
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
  </div>
)}

export default App;
