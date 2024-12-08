import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayouts } from '../../components/MainLayouts/MainLayouts';
import { Home } from '../Home/Home';
import { Cart } from '../Cart/Cart';
import { Wishlist } from '../Wishlist/Wishlist';
import { CartPage } from '../CartPage/CartPage';
import './AppRouter.css'

export const AppRouter = () => {
  return (
      <Routes>
        <Route path='/' element={<MainLayouts />}>
          <Route index element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/cartpage/:id' element={<CartPage />} />
        </Route>
      </Routes>
  )
};