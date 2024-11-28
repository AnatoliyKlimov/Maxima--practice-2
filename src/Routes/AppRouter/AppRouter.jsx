import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayouts } from '../../components/MainLayouts/MainLayouts';
import { Home } from '../Home/Home';
import { Cart } from '../Cart/Cart';
import './AppRouter.css'

export const AppRouter = () => {
  return (
      <Routes>
        <Route path='/' element={<MainLayouts />}>
          <Route index element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
  )
};