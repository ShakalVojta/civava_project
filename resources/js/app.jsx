import React from 'react'
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div>
        <div className="container">
            <h1>Eva Klapačová</h1>
            <p>Portfolio v přípravě</p>
        </div>
    </div>
  )
}

if (document.getElementById('app')) {
    const root = createRoot(document.getElementById('app'));
    root.render(<App />);
}
