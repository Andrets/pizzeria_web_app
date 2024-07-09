import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import styles from './styles.module.css'

export const Search = ({ onOpen, onClose }) => {
	const search = useSelector((state) => state.search)
	const { isOpen } = search
	return (
		<div className={styles.search} onClick={isOpen ? onClose : onOpen}>
			{isOpen ? <img src="img/exit.svg" alt="close" /> : <img src="img/search.svg" alt="close" />}
		</div>
	)
}

Search.propTypes = {
	onOpen: PropTypes.func,
	onClose: PropTypes.func
}