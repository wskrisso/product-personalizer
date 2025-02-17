import React, { useState } from 'react';
import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '../Button/Button';

const Product = ({ title, basePrice, colors, sizes, id, name }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name); 
  
  const getPrice = () => {
    const size = sizes.find((element) => element.name === currentSize);
    return basePrice + size.additionalPrice;
  };
  
  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={`${title} - ${currentColor}`}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
            {sizes.map((size) => (
                <li key={size.name}>
                  <button
                    type="button"
                    className={clsx(size.name === currentSize && styles.active)}
                    onClick={() => setCurrentSize(size.name)}>
                    {size.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
            {colors.map((color) => (
                <li key={color}>
                  <button
                    type="button"
                    className={clsx(
                      styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()],
                      color === currentColor && styles.active,
                    )}
                    onClick={() => setCurrentColor(color)}>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <Button className={styles.button}
          id={id}
          name={name}
          title={title}
          color={currentColor}
          size={currentSize}
          basePrice={getPrice()}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    }),
  ).isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Product;