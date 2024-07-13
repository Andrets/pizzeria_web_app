import PropTypes from 'prop-types'
import styles from './styles.module.css'

export const Button = ({ title, icon, ...props }) => {
	return (
		<button {...props} type="button" className={styles.button}>
			{icon && 
				(
					<div className={styles.icon}>
						<img src={icon} alt={title} />
					</div>
				)
			}
			{title}
		</button>
	)
}

Button.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string,
}