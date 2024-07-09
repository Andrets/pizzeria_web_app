import PropTypes from 'prop-types'
import styles from './styles.module.css'

export const Cart = ({ length, onClick, disabled }) => {
	return (
		<div className={styles.cartWrapper} onClick={onClick} aria-disabled={disabled}>
			<div className={styles.cart}>
				<img src='img/cart.svg' alt='Cart' className={styles.cartIcon} />
			</div>
			<div className={styles.cartCount}>{length}</div>
		</div>
	)
}

Cart.propTypes = {
	length: PropTypes.number,
	onClick: PropTypes.func,
	disabled: PropTypes.bool
}