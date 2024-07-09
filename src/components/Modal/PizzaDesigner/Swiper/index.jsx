import PropTypes from 'prop-types'
import 'swiper/css'
import 'swiper/css/pagination'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IngredientCard } from './IngredientCard'
import styles from './styles.module.css'
export const SwiperIngredients = ({ data }) => {
	return (
		<Swiper 
			slidesPerView='auto'
			modules={[FreeMode]}
			mousewheel={true}
			direction="vertical"
			className={styles.swiper}
			spaceBetween={15}
		>
			{data.map((item, index) => (
				<SwiperSlide key={index} className={styles.swiperSlide}>
					<IngredientCard item={item} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}

SwiperIngredients.propTypes = {
	data: PropTypes.array
}