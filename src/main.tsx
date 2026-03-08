import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Remove initial loader
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
// Fallback if load event already fired
if (document.readyState === 'complete') {
  document.body.classList.add('loaded');
}
