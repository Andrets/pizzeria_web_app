import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { FoodCard } from './FoodCard'
import styles from './styles.module.css'

export const FoodList = ({ isLoading, error }) => {
	const { isOpen } = useSelector((state) => state.search)
	const { foodList, filteredFoodList } = useSelector((state) => state.food)
	if (isLoading) {
		return <div>Загрузка...</div>
	}

	if (error) {
		return <div>Произошла ошибка!</div>
	}

	if (isOpen) {
		return (
			<ul className={styles.foodList}>
				{filteredFoodList?.length > 0 ? filteredFoodList?.map((food) => (
					<li key={food.id} className={styles.foodItem}>
						<FoodCard food={food} />
					</li>
				)) : <div className={styles.notFound}>Ничего не найдено</div>}
			</ul>
		)
	}

	return (
		<ul className={styles.foodList}>
			{foodList?.map((food) => (
				<li key={food.id} className={styles.foodItem}>
					<FoodCard food={food} />
				</li>
			))}
		</ul>
	)
}

FoodList.propTypes = {
	isLoading: PropTypes.bool,
	error: PropTypes.object
}