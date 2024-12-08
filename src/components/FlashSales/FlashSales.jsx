import React from 'react';
import { productList } from '../productList';
import { CartItem } from '../CartItem/CartItem';
import { Button } from '../Button/Button';
import { SectionTop } from '../SectionsTop/SectionTop';
import styles from './FlashSales.module.css';

export const FlashSales = () => {
  return (
    <section className={styles.flashSales}>
      <SectionTop title={'Today’s'} subtitle={'Flash Sales'} />
      <div className={styles.block}>
         {
            productList.flashSales.map(e => <CartItem key={e.id} item={e} />)
         }
      </div>
      <Button name={'View All Products'} width={234} margin={`60px auto`} />
    </section>
  )
};
