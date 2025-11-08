import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AppProvider from './AppProvider.jsx'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Posts from './pages/Posts.jsx';
import View from './pages/View.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Posts />,
      },

      {
        path: "/view/:id",
        element: <View />,
      },

      {
        path: "/Login",
        element: <Login />,
      },

      {
        path: "/Register",
        element: <Register />,
      },


    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>,
)
