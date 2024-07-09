import PropTypes from 'prop-types'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ItemCard } from './ItemCard'
import styles from './styles.module.css'
export const SwiperCartItems = ({ items }) => {

	return (
		<Swiper 
			slidesPerView='auto'
			modules={[FreeMode]}
			mousewheel={true}
			scrollbar={{ draggable: true }}
			direction="vertical"
			className={styles.swiper}
		>
			{items.map((item, index) => (
				<SwiperSlide key={index} className={styles.swiperSlide}>
					<ItemCard item={item} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}

SwiperCartItems.propTypes = {
	items: PropTypes.array
}