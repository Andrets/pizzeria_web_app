import { changeQuantity } from '@redux/slices/cartSlice'
import PropTypes from "prop-types"
import { useDispatch } from 'react-redux'
import styles from './styles.module.css'
export const ItemCard = ({ item, index }) => {
	const dispatch = useDispatch()
	const increment = () => {
		dispatch(changeQuantity({
			index,
			quantity: item.quantity + 1
		}))
	}
	const decrement = () => {
		dispatch(changeQuantity({
			index,
			quantity: item.quantity - 1
		}))
	}
	return (
		<div className={styles.itemCard}>
			<img src={item.photo} alt={item.name} className={styles.img} />
			<div className={styles.info}>
				<span>{item.name}, {item.weight} гр.</span>
				<div className={styles.price}>
					<p>{Number(item.price)}₽</p>
					<div className={styles.counter}>
						<button onClick={increment}>+</button>
						<p>{item.quantity}</p>
						<button disabled={item.quantity === 1} onClick={decrement}>-</button>
					</div>
				</div>
			</div>
		</div>
	)
}

ItemCard.propTypes = {
	item: PropTypes.object,
	index: PropTypes.number
}