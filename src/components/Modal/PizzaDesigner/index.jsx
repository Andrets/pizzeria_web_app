import { closeModal } from '@app/redux/slices/modalsSlice'
import { compoundMockData } from '@utils/mock/food'
import { useDispatch } from 'react-redux'
import { SwiperIngredients } from './Swiper'
import styles from './styles.module.css'

export const PizzaDesignerModal = () => {
	const dispatch = useDispatch()
	const close = () => dispatch(closeModal())
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
			<SwiperIngredients data={compoundMockData} />
			<div className={styles.food__addCart}>
				<p className={styles.food__price}><span>Стоимость: </span>1500₽</p>
				<button type="button" className={styles.food__btn}>ДОБАВИТЬ В КОРЗИНУ</button>
			</div>
		</div>
	)
}