import { addToCart } from '@app/redux/slices/cartSlice'
import { closeModal } from '@app/redux/slices/modalsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { SwiperIngredients } from './Swiper'
import styles from './styles.module.css'

export const PizzaDesignerModal = () => {
	const dispatch = useDispatch()
	const close = () => dispatch(closeModal())
	const { compoundList } = useSelector((state) => state.food)
	const { price, compounds } = useSelector((state) => state.pizzaDesign)
	const handleOnClick = () => {
		dispatch(addToCart({
			name: 'Пицца',
			compounds: compounds,
			price: price,
			photo: 'img/pizza.png',
			quantity: 1,
			weight: compounds.reduce((acc, item) => Number(acc) + Number(item.weight), 0),
		}))
		close()
	}
	return (
		<div className={styles.food__container}>
			<div className={styles.food__name}>
				<h2>Собери свою пиццу 🔥</h2>
				<button className={styles.food__exit} type="button" onClick={close}>
					<img src="img/exit.svg" alt="exit"  />
				</button>
			</div>
			<div className={styles.plashka}>
				<img src="img/pizza.png" alt="pizza" className={styles.plashka__img} />
				<p className={styles.plashka__text}>Выбери ингредиенты и мы приготовим пиццу на <span>твой вкус!</span></p>
			</div>
			<SwiperIngredients data={compoundList} />
			<div className={styles.food__addCart}>
				<p className={styles.food__price}><span>Стоимость: </span>{price + '₽'}</p>
				<button type="button" className={styles.food__btn} onClick={handleOnClick}>ДОБАВИТЬ В КОРЗИНУ</button>
			</div>
		</div>
	)
}