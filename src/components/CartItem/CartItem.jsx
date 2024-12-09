import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, revoweProduct } from '../../Redux/Reducers/CartSlice';
import { viewAdd, viewRemove } from '../../Redux/Reducers/WishSlice';
import { Favorities } from '../Favorities/Favorities';
import stars from '../../images/stars.png';
import styles from './CartItem.module.css';

export const CartItem = ({item}) => {

  const dispatch = useDispatch();
  const {products} = useSelector(state => state.cart);
  const {viewed} = useSelector(state => state.wish);
  const productInCart = products.some(e => e.title === item.title);
  const productInViewed = viewed.some(e => e.title === item.title);
  
  return (
   <div className={styles.item}>
    <div className={styles.img}>
      {item.discount && <span className={styles.discount}>{item.discount}%</span>}
      <Link to={`/cartpage/${item.id}`}><img src={item.img} alt="" /></Link>
      <div
        style={{backgroundColor: productInCart ? "#DB4444" : "#000"}}
        onClick={() => dispatch(productInCart ? revoweProduct(item.title) : addProduct(item))}
        className={styles.add}
      >
        <span>{productInCart ? 'Remove From Cart' : 'Add To Cart'}</span>

      </div>
      <div className={styles.faView}>
        <Favorities item={item} />
        <span
        style={{background: productInViewed && '#DB4444', color: productInViewed && '#fff'}}
        className={styles.viewed}
        onClick={() => dispatch(!productInViewed ? viewAdd(item) : viewRemove(item))}
        >
          <MdOutlineRemoveRedEye />
        </span>
      </div>
    </div>
    <div className={styles.bottom}>
      <h3>{item.title}</h3>
      <div className={styles.price_block}>
          <span className={styles.price}>${item.price}</span>
          { item.oldprice && <del><span className={styles.oldprice}>{item.oldprice}</span></del>}
      </div>
      <div className={styles.rating}>
        <img src={stars} alt="" />
        <span>(88)</span>
      </div>
    </div>
</div>
  )
};