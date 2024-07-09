import { closeModal } from '@redux/slices/modalsSlice'
import { compoundMockData } from '@utils/mock/food'
import { useDispatch, useSelector } from 'react-redux'
import { SwiperCompounds } from './SwiperCompounds'
import { SwiperIngredients } from './SwiperIngredients'
import styles from './styles.module.css'
export const ChangeIngredients = () => {
	const dispatch = useDispatch()
	const { food } = useSelector((state) => state.modals.data)
	const close = () => dispatch(closeModal())
	return (
		<div className={styles.ingredients__container}>
			<div className={styles.ingredients__name}>	
				<h2>Ингредиенты</h2>
				<button className={styles.ingredients__exit} type="button" onClick={close}>
					<img src="img/exit.svg" alt={food.name}  />
				</button>
			</div>
			<SwiperIngredients ingredients={food.ingredients} />
			<h2 className={styles.ingredients__title}>Добавь в пиццу</h2>
			<SwiperCompounds compounds={compoundMockData} />
			<div className={styles.ingredients__addCart}>
				<button className={styles.ingredients__button} type="button">Добавить в корзину ({food.price}₽)</button>
			</div>
		</div>	
	)
};