import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Favorities } from '../../components/Favorities/Favorities';
import { SectionTop } from '../../components/SectionsTop/SectionTop';
import { CartItem } from '../../components/CartItem/CartItem';
import { productList } from '../../components/productList';
import stars from '../../images/stars.png';
import iconAuto from '../../images/delivery-icon1.png';
import iconReturn from '../../images/delivery-icon2.png';
import styles from './CartPage.module.css';

export const CartPage = () => {

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

   const {id} = useParams();
   const allProducts = [
    ...productList.flashSales,
    ...productList.bestSellingProducts,
    ...productList.exploreOurProducts,
    ...productList.browseByCategory
   ];

   const item = allProducts.find(e => String(e.id) === id);
   const {title, img, price} = item;
   const [count, setCount] = useState(1);
   function increment () {
    setCount(count + 1)
   }

   function decrement () {
    if(count > 1) {
      setCount(count - 1)
    }
   }

  return (
    <div className={styles.container}>
      <div className={styles.navigate}>
        <Link to="">Account /</Link>
        <Link to="">Gaming /</Link>
        <h2>{title}</h2>
      </div>

      <section className={styles.blockItem}>
        <div className={styles.miniItems}>
          
          <div className={styles.miniBlock}>
            <img src={img} alt="" />
          </div>

          <div className={styles.miniBlock}>
            <img src={img} alt="" />
          </div>

          <div className={styles.miniBlock}>
            <img src={img} alt="" />
          </div>

          <div className={styles.miniBlock}>
            <img src={img} alt="" />
          </div>

        </div>
        <div className={styles.item}>
          <img src={img} alt="" />
        </div>
        <div className={styles.infoBlock}>

          <div className={styles.infoPrice}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.rating}>
              <img src={stars} alt="" />
              <span>(150 Reviews)</span>
              <span>|</span>
              <span className={styles.stock}>In Stock</span>
            </div>
            <span className={styles.price}>${price}</span>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil inventore 
              molestias velit repellendus ipsa eveniet corrupti.
              </p>
          </div>

          <div className={styles.buyBlock}>
            <div className={styles.colours}>
              <span>Colours:</span>
              <div className={styles.select}>
                <span className={styles.blue}></span>
                <span className={styles.red}></span>
              </div>
            </div>
            <div className={styles.sizeBlock}>
              <span>Size:</span>
              <div className={styles.sizeCheckBlock}>
                {
                  sizes.map(e => <div
                    key={e}
                    className={styles.sizeCheck}
                    >
                      {e}
                    </div>)
                }
              </div>
            </div>
            <div className={styles.buy}>
              <div className={styles.counter}>
                <span onClick={decrement} className={styles.decrement}>-</span>
                <span className={styles.count}>{count}</span>
                <span onClick={increment} className={styles.increment}>+</span>
              </div>
              <button>Buy Now</button>
                <Favorities item={item} />
            </div>
          </div>

          <div className={styles.delivery}>
            <div className={styles.delivery_top}>
              <img src={iconAuto} alt="" />
              <div className={styles.deliveryInfo}>
                <h3>Free Delivery</h3>
                <span>Enter your postal code for Delivery Availability</span>
              </div>
            </div>

            <div className={styles.delivery_bottom}>
              <img src={iconReturn} alt="" />
              <div className={styles.deliveryInfo}>
                <h3>Return Delivery</h3>
                <span>Free 30 Days Delivery Returns. Details</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.related_block}>
        <SectionTop title='Related item' subtitle="" />
        <div className={styles.block}>
          {
            productList.flashSales.map(e => <CartItem key={e.id} item={e} />)
          }
        </div>
      </section>
    </div>
  )
}
