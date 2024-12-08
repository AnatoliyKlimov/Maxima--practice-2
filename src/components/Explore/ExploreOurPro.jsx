import React from 'react';
import { SectionTop } from '../SectionsTop/SectionTop';
import { productList } from '../productList';
import { CartItem } from '../CartItem/CartItem';
import styles from './ExploreOurPro.module.css';
import { Button } from '../Button/Button';

export const ExploreOurPro = () => {
  return (
    <section className={styles.explore}>
      <SectionTop title={'Our Products'} subtitle={'Explore Our Products'} />
      <div className={styles.block}>
      {
         productList.exploreOurProducts.map(e => <CartItem key={e.id} item={e}/>)
      }
      </div>
      <Button name={'View All Products'} width={234} margin={`60px auto`}  />
    </section>
  )
}
