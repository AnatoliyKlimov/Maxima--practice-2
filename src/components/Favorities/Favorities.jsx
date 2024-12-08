import React from 'react';
import { MdFavoriteBorder } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { addWish, removeWish } from '../../Redux/Reducers/WishSlice';

export const Favorities = ({item}) => {

   const dispatch = useDispatch();
   const {wishlist} = useSelector(state => state.wish);
   const productInWish = wishlist.some(e => e.title === item.title);

  return (
   <span
      style={{background: productInWish && '#DB4444', color: productInWish && '#fff'}}
      onClick={() => dispatch(!productInWish ? addWish(item) : removeWish(item))}
      >
     <MdFavoriteBorder />
   </span>
  )
};