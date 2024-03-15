import React from 'react';
import logo from './logo.svg';
import ProductList from './features/product-list/ProductList';
import Home from './pages/Home';
import Login from './features/auth/components/Login';
import LoginPage from './pages/LoginPage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import SignUpPage from './pages/SignUpPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignUpPage></SignUpPage>,
  }
]);
function App() {
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
