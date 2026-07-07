if (typeof window !== 'undefined' && /^\/webmail\/?$/i.test(window.location.pathname)) {
  window.location.replace("https://webmail.warmikapital.com.pe");
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
