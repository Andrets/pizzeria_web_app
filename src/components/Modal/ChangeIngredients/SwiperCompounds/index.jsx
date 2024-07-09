import PropTypes from 'prop-types'
import 'swiper/css'
import 'swiper/css/pagination'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CompoundCard } from './Card'
import styles from './styles.module.css'
export const SwiperCompounds = ({ compounds }) => {
	return (
		<Swiper 
			slidesPerView='auto'
			modules={[FreeMode]}
			mousewheel={true}
			direction="vertical"
			className={styles.swiper}
			spaceBetween={15}
		>
			{compounds.map((item, index) => (
				<SwiperSlide key={index} className={styles.swiperSlide}>
					<CompoundCard item={item} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}

SwiperCompounds.propTypes = {
	compounds: PropTypes.array
}