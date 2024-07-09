import PropTypes from 'prop-types'
import styles from './styles.module.css'
export const IngredientCard = ({ ingredient }) => {
	return (
		<div className={styles.ingredient__card}>
			<p className={styles.ingredient__name}>{ingredient}</p>
			<button className={styles.ingredient__btn} type="button">Убрать</button>
		</div>
	)
}

IngredientCard.propTypes = {
	ingredient: PropTypes.string
}