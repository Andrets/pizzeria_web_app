import PropTypes from 'prop-types'
import styles from './styles.module.css'
export const CompoundCard = ({ item }) => {
	return (
		<div className={styles.ingredientCard}>
			<img src={item.image} alt={item.name} className={styles.image} />
			<div className={styles.ingredients}>
				<span>{item.name}</span>
				<div className={styles.price}>
					<p><span>{item.weight} г.</span> | {item.price}₽</p>
					<button type="button" className={styles.button}>Добавить</button>
				</div>
			</div>
		</div>
	);
};

CompoundCard.propTypes = {
	item: PropTypes.object
}