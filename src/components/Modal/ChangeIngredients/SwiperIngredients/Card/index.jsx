import { addIngredients, removeIngredients, setPrice } from '@redux/slices/changeIngredientsSlice'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.css'

export const IngredientCard = ({ ingredient }) => {
  const dispatch = useDispatch();
  const { ingredients, price } = useSelector((state) => state.changeIngredients);

  const [isAdded, setIsAdded] = useState(
		true
	);

  const handleOnClick = () => {
    if (isAdded) {
      dispatch(removeIngredients(ingredient.id));
      dispatch(setPrice(price - Number(ingredient.price)));
			setIsAdded(false);
    } else {
      dispatch(addIngredients({ ...ingredient, isAdded: true }));
      dispatch(setPrice(price + Number(ingredient.price)));
			setIsAdded(true);
    }
  };

  return (
    <div className={styles.ingredient__card}>
      <p className={styles.ingredient__name}>{ingredient?.name}</p>
      <button
        className={`${styles.ingredient__btn} ${isAdded ? '' : styles.ingredient__btnAdded}`}
        type="button"
        onClick={handleOnClick}
      >
        {isAdded ? 'Убрать' : 'Вернуть'}
      </button>
    </div>
  );
}

IngredientCard.propTypes = {
  ingredient: PropTypes.object.isRequired
};