import PropTypes from "prop-types"
import { useState } from "react"
import styles from './styles.module.css'
export const ItemCard = ({ item }) => {
	const [count, setCount] = useState(1)
	const increment = () => {
		setCount(count + 1)
	}
	const decrement = () => {
		setCount(count - 1)
	}
	return (
		<div className={styles.itemCard}>
			<img src={item.images[0]} alt={item.name} className={styles.img} />
			<div className={styles.info}>
				<span>{item.name}, {item.measure} гр.</span>
				<div className={styles.price}>
					<p>{item.price}₽</p>
					<div className={styles.counter}>
						<button onClick={increment}>+</button>
						<p>{count}</p>
						<button disabled={count === 1} onClick={decrement}>-</button>
					</div>
				</div>
			</div>
		</div>
	)
}

ItemCard.propTypes = {
	item: PropTypes.object
}