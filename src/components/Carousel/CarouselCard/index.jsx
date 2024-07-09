import PropTypes from 'prop-types'
import styles from './styles.module.css'
export const CarouselCard = ({ name }) => {
	return (
		<button className={styles.button}>{name}</button>
	)
}

CarouselCard.propTypes = {
	name: PropTypes.string
}