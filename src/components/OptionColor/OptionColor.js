import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './OptionColor.module.scss';

const OptionColor = ({ colors, currentColor, setCurrentColor }) => {

  return (
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
  );
};

OptionColor.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
};

export default OptionColor;