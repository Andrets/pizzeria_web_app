import { useDispatch, useSelector } from 'react-redux'
import 'swiper/css'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IngredientCard } from './Card'
import styles from './styles.module.css'

export const SwiperIngredients = () => {
  const dispatch = useDispatch();
  const { ingredients } = useSelector((state) => state.changeIngredients);

  return (
    <Swiper
      slidesPerView="auto"
      modules={[FreeMode]}
      mousewheel={true}
      direction="vertical"
      className={styles.swiper}
      spaceBetween={15}
    >
      {ingredients.map((ingredient) => (
        <SwiperSlide key={ingredient.id}>
          <IngredientCard ingredient={ingredient} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}