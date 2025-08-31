import React from 'react';
import ReactDOM from 'react-dom/client';
import {Store} from './config/redux/Store';
import {Provider} from "react-redux";
import AppRoutes from './routes/AppRoutes';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <AppRoutes/>
  </Provider>
  </React.StrictMode>
);
