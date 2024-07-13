import { addCompounds, removeCompounds, setPrice } from '@redux/slices/pizzaDesignSlice'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.css'

export const IngredientCard = ({ item }) => {
  const dispatch = useDispatch();
  const { compounds, price } = useSelector((state) => state.pizzaDesign);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setIsAdded(compounds.some(compound => compound.id === item.id));
  }, [compounds, item.id]);

  const handleOnClick = () => {
    if (isAdded) {
      dispatch(removeCompounds(item.id));
			dispatch(setPrice(price - Number(item.price)))
    } else {
      dispatch(addCompounds(item));
			dispatch(setPrice(price + Number(item.price)))
    }
  };

  return (
    <div className={styles.ingredientCard}>
      <img src={item.photo} alt={item.name} className={styles.image} />
      <div className={styles.ingredients}>
        <span>{item.name}</span>
        <div className={styles.price}>
          <p><span>{item.weight} г.</span> | {Math.floor(item.price)}₽</p>
          <button
            type="button"
            className={`${styles.button} ${isAdded ? styles.buttonAdded : ''}`}
            onClick={handleOnClick}
          >
            {isAdded ? 'Убрать' : 'Добавить'}
          </button>
        </div>
      </div>
    </div>
  );
};

IngredientCard.propTypes = {
  item: PropTypes.object.isRequired
};