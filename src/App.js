import React from 'react';
import logo from './logo.svg';
import ProductList from './features/product-list/Components/ProductList';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUpPage from './pages/SignUpPage';
import { CartPage } from './pages/CartPage';
import Checkout from './pages/Checkout';
import { ProductDetails } from './features/product-list/Components/ProductDetails';
import ProductDetailPage from './pages/ProductDetailPage';

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
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "/checkout",
    element: <Checkout></Checkout>,
  },
  {
    path: "/productDetails",
    element: <ProductDetailPage></ProductDetailPage>
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
