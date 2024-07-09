import { openFoodModal } from '@app/redux/slices/modalsSlice'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import styles from './styles.module.css'
import { Button } from './ui/Button'

export const FoodCard = ({ food }) => {
	const dispatch = useDispatch()
	const openAdd = () => dispatch(openFoodModal(food))
	return (
		<div className={styles.foodCard}>
			<img src={food.images[0]} alt={food.name} className={styles.foodImage} />
			<div className={styles.foodInfo}>
				<p className={styles.foodName}>{food.name}, {food.measure} гр.</p>
				<Button onClick={openAdd}>{food.price}₽</Button>
			</div>
		</div>
	)
}

FoodCard.propTypes = {
	food: PropTypes.object,
}