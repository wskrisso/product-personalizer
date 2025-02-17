import styles from './ProductForm.module.scss';
import Button from '../Button/Button'
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import PropTypes from 'prop-types'

const ProductForm = ({sizes, currentSize, setCurrentSize, colors, currentColor, setCurrentColor, id, title, name, basePrice}) => {


    return (
      <form>
              <OptionSize
                sizes={sizes}
                currentSize={currentSize}
                setCurrentSize={setCurrentSize}
              />
                <OptionColor
                  colors={colors}
                  currentColor={currentColor}
                  setCurrentColor={setCurrentColor}
                />
                <Button className={styles.button}
                id={id}
                name={name}
                title={title}
                color={currentColor}
                size={currentSize}
                basePrice={basePrice}>
                  <span className="fa fa-shopping-cart" />
                </Button>
              </form>
    );
};

ProductForm.propTypes = {
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
};

export default ProductForm;