import React from 'react';
import { useDispatch } from 'react-redux';
import { addCount, revoweCount } from '../../Redux/Reducers/CartSlice';
import styles from './ProductInCart..module.css';

export const ProductInCart = ({item}) => {
  const dispatch = useDispatch();
  const fulPrice = item.price * item.count;

  return (
    <div className={styles.blockProduct}>
      <div className={styles.product}>
         <div className={styles.img}>
            <img src={item.img} alt="" />
         </div>
         <h3 className={styles.title}>{item.title}</h3>
      </div>

      <div className={styles.price}>${item.price}</div>
      <div className={styles.quantty}>
        <div className={styles.counter_block}>
         <span className={styles.count}>{item.count}</span>
         <span className={styles.counter}>
            <span onClick={() => dispatch(addCount(item))}>&lt;</span>
            <span onClick={() => dispatch(revoweCount(item))}>&gt;</span>
         </span>
        </div>
      </div>
      <div className={styles.subtotal}>${fulPrice}</div>
    </div>
  )
}
