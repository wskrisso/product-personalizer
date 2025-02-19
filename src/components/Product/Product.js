import React, { useState, useMemo } from 'react';
import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';


const Product = ({ title, basePrice, colors, sizes, id, name }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name); 
  
  const price = useMemo(() => {
    const size = sizes.find((element) => element.name === currentSize);
    return basePrice + size.additionalPrice;
  }, [currentSize, basePrice, sizes]);
  
  return (
    <article className={styles.product}>
            <ProductImage name={name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <ProductForm
        colors={colors}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}

        sizes={sizes}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}

        id={id}
        title={title}
        name={name}
        basePrice={basePrice}
        price={price}
        />
      </div>
    </article>
  )
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Product;