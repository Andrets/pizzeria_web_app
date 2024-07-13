import { setActiveCategory } from '@app/redux/slices/categorySlice'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.css'
export const CarouselCard = ({ name }) => {
	const dispatch = useDispatch()
	const { activeCategory } = useSelector((state) => state.category)
	const changeActiveCategory = () => dispatch(setActiveCategory(name))
	return (
		<button className={`${styles.button} ${activeCategory === name ? styles.active : ''}`} type="button" onClick={changeActiveCategory}>{name}</button>
	)
}

CarouselCard.propTypes = {
	name: PropTypes.string
}