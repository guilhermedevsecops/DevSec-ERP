// src/components/ToastProvider.tsx
import React from 'react';
import { ToastContainer } from 'react-toastify';

const ToastProvider: React.FC = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );
};

export default ToastProvider;
