import { useTelegram } from '@hooks/useTelegram'
import { closeModal } from '@redux/slices/modalsSlice'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SwiperCartItems } from './Swiper'
import styles from './styles.module.css'

export const CartModal = () => {
	const { sendData, close } = useTelegram()
	const dispatch = useDispatch()
	const close1 = () => dispatch(closeModal())
	const items = useSelector((state) => state.cart.cart)
	const [promo, setPromo] = useState('')
	const [price, setPrice] = useState(0)
	const [fixed, setFixed] = useState(false)

	const cartBuyRef = useRef(null);

	const purchase = () => {
		const data = {
				promo,
				items
		}
		sendData(`{data: ${JSON.stringify(data)}}`)
		close()
	}

	useEffect(() => {
		setPrice(items.reduce((acc, item) => acc + (Number(item.price) * item.quantity), 0))
	}, [items])

	useEffect(() => {
		const handleResize = () => {
			if (items.length < 3) {
				cartBuyRef.current.classList.add(styles.fixed);
				setFixed(true);
			} else {
				cartBuyRef.current.classList.remove(styles.fixed);
				setFixed(false);
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, [items]);

	return (
		<div className={styles.cart__container}>
			<div className={styles.cart__name}>
				<h2>Корзина</h2>
				<button className={styles.cart__exit} type="button" onClick={close1}>
					<img src="img/exit.svg" alt="exit" />
				</button>
			</div>
			<SwiperCartItems items={items} fixed={fixed} />
			<div className={styles.cart__buy} ref={cartBuyRef}>
				<p className={styles.cart__price}><span>Стоимость: </span>{price}₽</p>
				<input type="text" placeholder='Ввести промокод' className={styles.cart__promo} value={promo} onChange={(e) => setPromo(e.target.value)} />
				<button onClick={purchase} type="button" className={styles.cart__btn}>ОФОРМИТЬ ЗАКАЗ</button>
			</div>
		</div>
	)
}