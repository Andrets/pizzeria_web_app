import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ItemCard } from './ItemCard'
import styles from './styles.module.css'
export const SwiperCartItems = ({ items, fixed }) => {
	const cartItemsRef = useRef(null);
	useEffect(() => {
		if (fixed) {
			cartItemsRef.current.classList.add(styles.fix);
		} else {
			cartItemsRef.current.classList.remove(styles.fix);
		}
	}, [fixed]);

	return (
		<Swiper 
			slidesPerView='auto'
			modules={[FreeMode]}
			mousewheel={true}
			scrollbar={{ draggable: true }}
			direction="vertical"
			className={styles.swiper}
			ref={cartItemsRef}
		>
			{items.map((item, index) => (
				<SwiperSlide key={index} className={styles.swiperSlide}>
					<ItemCard item={item} index={index} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}

SwiperCartItems.propTypes = {
	items: PropTypes.array,
	fixed: PropTypes.bool
}