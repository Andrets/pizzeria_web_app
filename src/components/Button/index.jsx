import PropTypes from 'prop-types'
import styles from './styles.module.css'

export const Button = ({ ...props }) => {
	const { title, icon } = props
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
	props: {
		title: PropTypes.string.isRequired,
		icon: PropTypes.string,
		onClick: PropTypes.func
	}
}