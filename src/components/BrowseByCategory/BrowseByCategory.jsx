import React from 'react';
import { productList } from '../productList';
import { SectionTop } from '../SectionsTop/SectionTop';
import styles from './BrowseByCategory.module.css';

export const BrowseByCategory = () => {
  return (
    <section className={styles.browseByCat}>
      <SectionTop title={'Categories'} subtitle={'Browse By Category'} />
      <div className={styles.block}>
         {
            productList.browseByCategory.map(e => <div className={styles.img} key={e.id}>
                  <img src={e.img} alt="" />
                  <span>{e.title}</span>
               </div>)
         }
      </div>
    </section>
  )
};
