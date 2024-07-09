import PropTypes from 'prop-types'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IngredientCard } from './Card'
import styles from './styles.module.css'

export const SwiperIngredients = ({ ingredients }) => {
	return (
		<Swiper
			slidesPerView='auto'
			modules={[FreeMode]}
			mousewheel={true}
			direction="vertical"
			className={styles.swiper}
			spaceBetween={15}
		>
			{ingredients.map((ingredient) => (
				<SwiperSlide key={ingredient}>
					<IngredientCard ingredient={ingredient} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}

SwiperIngredients.propTypes = {
	ingredients: PropTypes.array
}