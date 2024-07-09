import { useSelector } from 'react-redux'
import 'swiper/css'
import 'swiper/css/free-mode'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CarouselCard } from './CarouselCard'
import styles from './styles.module.css'


export const Carousel = () => {
	const { categories } = useSelector((state) => state.category)
	return (
		<Swiper spaceBetween={6} slidesPerView={'auto'} modules={[FreeMode]} className={styles.slider} freeMode={true}>
			{categories.map((item, index) => (
				<SwiperSlide key={item.id} className={styles.slide}>
					<CarouselCard {...item} index={index} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}