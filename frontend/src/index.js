import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';
import App from './App';
import './i18next'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={(<div>Loading</div>)}>
      <Provider store={store}>
          <App />
      </Provider>
    </Suspense>
  </React.StrictMode>
);
