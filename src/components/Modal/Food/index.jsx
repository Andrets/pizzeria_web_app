import { addToCart } from '@redux/slices/cartSlice'
import { closeModal, openChangeIngredientsModal } from '@redux/slices/modalsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel } from './ImageCarousel'
import styles from './styles.module.css'
export const FoodModal = () => {
	const dispatch = useDispatch()
	const food = useSelector((state) => state.modals.data.food)
	const close = () => dispatch(closeModal())
	const handleOnClick = () => dispatch(addToCart(food))
	const changeIngredients = () => dispatch(openChangeIngredientsModal())
	return (
		<div className={styles.food__container}>
			<div className={styles.food__name}>
				<h2>{food.name}</h2>
				<button className={styles.food__exit} type="button" onClick={close}>
					<img src="img/exit.svg" alt={food.name}  />
				</button>
			</div>
			<Carousel images={food.images} />
			<div className={styles.food__description}>
				<p className={styles.food__structure}>{food.structure}</p>
				<p className={styles.food__allergens}><span>Аллергены:</span> {food.allergens}</p>
				<div className={styles.food__nutrients}>
					<div className={styles.food__measure}>
						<p>Вес</p>
						<span>{food.measure} г.</span>
					</div>
					<div className={styles.food__energy}>
						<p>Энерг. ценность</p>
						<span>{food.energy} ккал.</span>
					</div>
				</div>
			</div>
			<button className={styles.food__change} type="button" onClick={changeIngredients}>Изменить ингредиенты</button>
			<div className={styles.food__addCart}>
				<button className={styles.food__button} type="button" onClick={handleOnClick}>Добавить в корзину ({food.price}₽)</button>
			</div>
		</div>	
	)
}