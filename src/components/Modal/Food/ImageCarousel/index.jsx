import PropTypes from 'prop-types'
import 'swiper/css'
import 'swiper/css/free-mode'
import styles from './styles.module.css'

export const Carousel = ({ photo }) => {
	return (
		<img className={styles.image} src={photo} />
	);
};

Carousel.propTypes = {
	photo: PropTypes.string
};