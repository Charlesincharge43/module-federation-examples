import React, { useState } from 'react';
import { App2 } from './App2Lazy';

const App1 = React.lazy(() => import('app1/App'));

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
