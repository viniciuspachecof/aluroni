import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css'
import './index.css';
import Cardapio from './pages/Cardapio';

// Apagar o setupTests, reportWebVitals, logo, App.test, App.css, App.tsx, robots,manifest, logo, favicon
// Remover comentários do index.html
// Instalar o css-modules e scss
// Baixar o pacote normalize.css
// Baixar o pacote react-icons
// Baixar o pacote classnames

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Cardapio />
  </React.StrictMode>
);

