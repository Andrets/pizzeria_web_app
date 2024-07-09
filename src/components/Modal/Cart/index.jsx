import { closeModal } from '@app/redux/slices/modalsSlice'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SwiperCartItems } from './Swiper'
import styles from './styles.module.css'

export const CartModal = () => {
	const dispatch = useDispatch()
	const close = () => dispatch(closeModal())
	const items = useSelector((state) => state.cart.cart)
	const [promo, setPromo] = useState('')
	return (
		<div className={styles.cart__container}>
			<div className={styles.cart__name}>
				<h2>Корзина</h2>
				<button className={styles.cart__exit} type="button" onClick={close}>
					<img src="img/exit.svg" alt="exit"  />
				</button>
			</div>
			<SwiperCartItems items={items} />
			<div className={styles.cart__buy}>
				<p className={styles.cart__price}><span>Стоимость: </span>{items.reduce((acc, item) => acc + item.price, 0)}₽</p>
				<input type="text" placeholder='Ввести промокод' className={styles.cart__promo} value={promo} onChange={(e) => setPromo(e.target.value)} />
				<button type="button" className={styles.cart__btn}>ОФОРМИТЬ ЗАКАЗ</button>
			</div>
		</div>
	)
}