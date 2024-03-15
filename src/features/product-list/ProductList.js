import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  incrementAsync,
  selectCount,
} from './productListSlice';
import Product from './Product';
import CategoryFilters from './MainPage';
import MainPage from './MainPage';
import Navbar from '../navbar/Navbar';
export default function ProductList() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <div>
      <MainPage></MainPage>
    </div>
  );
}