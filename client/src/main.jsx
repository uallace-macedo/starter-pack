import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'globals.css';
import App from './App.jsx';
import { AuthProvider } from './section/auth/state/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
      <Toaster />
    </AuthProvider>
  </StrictMode>,
)
