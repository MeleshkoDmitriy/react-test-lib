import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.less';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { ROUTES } from './routes/routes';
import { FirstPage } from './pages/FirstPage/FirstPage';
import { Layout } from './components/layout/Layout/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const router = createBrowserRouter([
//   {
//     path: ROUTES.HOME,
//     element: <HomePage />
//   },
//   {
//     path: ROUTES.FIRST,
//     element: <FirstPage />
//   }
// ])

root.render(
  <React.StrictMode>
    <Layout>
      <HomePage />
    </Layout>
  </React.StrictMode>
);

reportWebVitals();
