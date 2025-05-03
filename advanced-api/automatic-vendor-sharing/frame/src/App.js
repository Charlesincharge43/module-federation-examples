import React, { useState } from 'react';

const App1 = React.lazy(() => import('app1/App'));

const App2 = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
    .then(() => import('app2/App'))
});

const App = () => {
  const [showApp2, setShowApp2] = useState(false)
  return (
  <div>
    <h1>Frame</h1>
    <button onClick={() => setShowApp2(!showApp2)}>Toggle App2</button>
    <React.Suspense fallback="Loading App 1">
      <App1 />
    </React.Suspense>

    {showApp2 && (
      <React.Suspense fallback="Loading App 2">
        <App2 />
      </React.Suspense>
    )}
  </div>
)}

export default App;
