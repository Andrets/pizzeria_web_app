import { useLazyGetAllCategoriesQuery } from '@redux/services/categoryApi'
import { setCategories } from '@redux/slices/categorySlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'swiper/css'
import 'swiper/css/free-mode'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CarouselCard } from './CarouselCard'
import styles from './styles.module.css'


export const Carousel = () => {
	const dispatch = useDispatch()
  const { categories } = useSelector((state) => state.category);
  const [getAllCategories, { data: categoriesData, isSuccess }] = useLazyGetAllCategoriesQuery();

  useEffect(() => {
    if (categories.length === 0) {
      getAllCategories();
    }
  }, [categories.length, getAllCategories]);

  useEffect(() => {
    if (isSuccess && categoriesData) {
      dispatch(setCategories(categoriesData));
    }
  }, [isSuccess, categoriesData, dispatch]);
	return (
		<Swiper spaceBetween={6} slidesPerView={'auto'} modules={[FreeMode]} className={styles.slider} freeMode={true}>
			<SwiperSlide className={styles.slide}>
				<CarouselCard name="ВСЕ" />
			</SwiperSlide>
			{categories?.map((item, index) => (
				<SwiperSlide key={item.id} className={styles.slide}>
					<CarouselCard {...item} index={index} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}