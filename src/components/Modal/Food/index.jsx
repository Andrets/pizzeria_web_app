import { addToCart } from '@redux/slices/cartSlice'
import { closeModal, openChangeIngredientsModal } from '@redux/slices/modalsSlice'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel } from './ImageCarousel'
import styles from './styles.module.css'
export const FoodModal = () => {
	const dispatch = useDispatch()
	const [alreadyAdded, setAlreadyAdded] = useState(false)
	const food = useSelector((state) => state.modals.data.food)
	const { cart } = useSelector((state) => state.cart)
	const close = () => dispatch(closeModal())
	
	const handleOnClick = () => {
		const foodCopy = {
			id: food.id,
			name: food.name,
			compounds: food.compounds,
			price: food.price,
			photo: food.photo,
			quantity: 1,
			weight: food.weight
		}
		dispatch(addToCart(foodCopy))
		close()
	}

	useEffect(() => {
		if (cart.some((item) => item.id === food.id)) {
			setAlreadyAdded(true)
		}
	}, [cart, food.id])

	const changeIngredients = () => dispatch(openChangeIngredientsModal())
	return (
		<div className={styles.food__container}>
			<div className={styles.food__name}>
				<h2>{food.name}</h2>
				<button className={styles.food__exit} type="button" onClick={close}>
					<img src="img/exit.svg" alt={food.name} />
				</button>
			</div>
			<Carousel photo={food.photo} />
			<div className={styles.food__description}>
				<p className={styles.food__structure}>{food.compounds}</p>
				<p className={styles.food__allergens}><span>Аллергены:</span> {food.allergens}</p>
				<div className={styles.food__nutrients}>
					<div className={styles.food__measure}>
						<p>Вес</p>
						<span>{food.weight} г.</span>
					</div>
					<div className={styles.food__energy}>
						<p>Энерг. ценность</p>
						<span>{food.energy_valuable} ккал.</span>
					</div>
				</div>
			</div>
			<button className={styles.food__change} type="button" onClick={changeIngredients}>Изменить ингредиенты</button>
			<div className={styles.food__addCart}>
				<button className={styles.food__button} type="button" onClick={handleOnClick} disabled={alreadyAdded}>Добавить в корзину ({Number(food.price)}₽)</button>
			</div>
		</div>	
	)
}