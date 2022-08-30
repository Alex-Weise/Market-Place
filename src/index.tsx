import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import "./fonts/MarckScript/MarckScript-Regular.ttf";
import "./fonts/Comfortaa/Comfortaa-VariableFont_wght.ttf";
import "./fonts/Cormorant/CormorantGaramond-Regular.ttf";
import "./fonts/SourceCode/SourceCodePro-VariableFont_wght.ttf";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);